#!/bin/sh

echo "Running database migrations..."
npx prisma migrate deploy

echo "Starting the server..."
exec npm run start
