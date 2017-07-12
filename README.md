Folder Structure:
Root folder: tradekart
PHP code: tradekart/server
HTML/Javascript/CSS -  tradekart/client


Note: Developed in windows machine 


Server code configuration:
Installation steps:
If you have PHP, composer installed on your machine, you may directly run PHP server
1.	Install PHP
2.	Copy php.ini file to PHP directory (tradekart/server/php.ini)
3.	Install composer
4.	Create symphony application (run below command)
 composer create-project symfony/framework-standard-edition tadekart/server
5.	Install dependencies through composer commands in php project folder tadekart/server
a.	composer require friendsofsymfony/rest-bundle
b.	composer require jms/serializer-bundle
c.	composer require nelmio/cors-bundle
6.	Register bundles (Add below entries to AppKernerl.php in tadekart/server /app folder)
new FOS\RestBundle\FOSRestBundle(),
new JMS\SerializerBundle\JMSSerializerBundle(),
new Nelmio\CorsBundle\NelmioCorsBundle()
7.	Add configuration in tadekart/server /app /config/config.yml (refer to project)
8.	Copy the files tadekart/server /src  & tadekart/server /tests  (refer to project)

Run PHP server:
1.	cd tradekart/server
2.	 php bin/console server:run


Client Code:
Installation steps:
1.	Run npm install command  to install JavaScript dependencies
 (Required to run test cases & less to css conversion)
2.	Copy angular.min.js from client/node_modules/angular to client/javascript folder
(angular.min.js is  already available in client/javascript, step not necessary )
3.	Copy angular-mocks.js from client/node_modules/angular-mocks to client/javascript folder
(angular-mocks.js is  already available in client/JavaScript, step not necessary )
4.	Run below command to watch less to css changes
gulp watch
5.	Run below command to execute jasmine test cases
karma start karma.conf.js
6.	Rest service URL is defined as   - http://127.0.0.1:8000/app_dev.php/product/
In productcontroller.js , productcontroller.spec.js
URL to be replaced, if the PHP server runs app in a different port.
7. Open Client/Productlist.html
