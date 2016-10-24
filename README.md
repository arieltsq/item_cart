# README for ITEM_cart


## Ruby version
* Rails 5.0.0

## Gem dependencies
* gem 'responders'  (To make cod DRY-er)
* gem 'react-rails'

## Configuration
1. To get the file in JSON format, go to http://localhost:3000/api/v1/items.json
2. To get see the CRUD front-end react format, go to http://localhost:3000

## Database creationµ
* POSTGRESQL

## Database initialization
  #### In your terminal

  ```
bundle install

rails db:create

rails db:migrate

rails db:seed
  ```

## Deployment instructions
1. Clone the repo
2. In your terminal
* bundle install
* rails db:create
* rails db:migrate
* rails db:seed

[Taken from an awesome tutorial](http://tutorials.pluralsight.com/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails)
