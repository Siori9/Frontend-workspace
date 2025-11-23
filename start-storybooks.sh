#!/usr/bin/env bash
set -e

wait_for_port() {
  local port=$1
  echo "⏳ Waiting for port $port..."
  while ! nc -z localhost $port; do
    sleep 0.5
  done
  echo "✅ Port $port is ready!"
}

echo "🚀 Starting child Storybooks..."

npm run sb:css &
CSS_PID=$!
npm run sb:react &
REACT_PID=$!
npm run sb:vue &
VUE_PID=$!

wait_for_port 6006
wait_for_port 6007
wait_for_port 6008

echo "🌍 Child Storybooks are ready. Starting root Storybook..."

npm run sb:root &
ROOT_PID=$!

cleanup() {
  echo ""
  echo "🛑 Stopping Storybooks..."
  kill $CSS_PID $REACT_PID $VUE_PID $ROOT_PID 2>/dev/null || true
  echo "👋 Goodbye!"
  exit 0
}

trap cleanup SIGINT

wait
