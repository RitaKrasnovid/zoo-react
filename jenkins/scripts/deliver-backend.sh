#!/usr/bin/env sh

echo 'The following "npm" command builds backend zoo for'
echo 'production in the local "build" directory'
set -x
cd './backend'
npm run build
if [ $? -eq 0 ]
then
  echo "SUCCESS"
  set +x
  echo 'The following "npm" command runs your Node.js/React application in'
  echo 'development mode and makes the application available for web browsing.'
  echo 'The "npm start" command has a trailing ampersand so that the command runs'
  echo 'as a background process (i.e. asynchronously). Otherwise, this command'
  echo 'can pause running builds of CI/CD applications indefinitely. "npm start"'
  echo 'is followed by another command that retrieves the process ID (PID) value'
  echo 'of the previously run process (i.e. "npm start") and writes this value to'
  echo 'the file ".pidfile".'
  set -x
  npm run start:dev &
  echo $! > .pidfile
  set +x
  set -x
  kill $(cat .pidfile)
else
  echo >&2 "command failed with exit status $ret"
  exit 1
fi
