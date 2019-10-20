# testcafe-docker

This project aims to setup and demonstrate the testcafe testbed using docker

Features
- testcafe enables to write tests in JScript and handles browser interactions asyncronously.
- Provides rich source of API's for end-2-end tests out-of-box capabilities
- Making use of docker-compose to run this in docker containers


Execution:

1. Clone this repo
   git clone https://github.com/kumarvastav/testcafe-docker.git

2. Run as docker containers
   BROWSER={Browsername} docker-compose up --force-recreate --abort-on-container-exit

   Browsername = chromium (chrome)
   Browsername = firefox (firefox)

   ex. BROWSER=chromiun docker-compose up --force-recreate --abort-on-container-exit


(Local setup and running the test locally)

1. Install testcafe as npm package globally
   npm install -g testcafe

    Follow below steps if permission denied error occurs during testcafe installation
    - mkdir ~/.npm-global
    - npm config set prefix '~/.npm-global'
    - export PATH=~/.npm-global/bin:$PATH ### Add this to the end of the file ~/.profile
    - source ~/.profile

2. Check if testcafe is installed successfully
   testcafe -v

3. Clone this repo
   git clone https://github.com/kumarvastav/testcafe-docker.git

4. Run the test locally
   testcafe chrome tests/

5. Run the test locally
      testcafe --live chrome tests/

docker pull testcafe/testcafe
