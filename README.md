# Thor
Thor (Tests Hub On Rails) is Testlink done right.<br>
It aims to write, plan and follow the execution of human-powered tests.

## Steps to install
### Get ruby 2.2
One solution is to add the ruby-ng ppa, as follows under Ubuntu Trusty. 
Alternatives includes make-ing it yourself.
```sh
$ apt-get install software-properties-common
$ apt-add-repository ppa:brightbox/ruby-ng
$ apt-get update
$ apt-get install ruby2.2 ruby2.2-dev
```
### Get dependencies
```sh
$ apt-get install sqlite3 libsqlite3-dev zlib1g-dev imagemagick nodejs
$ gem install rails
```

### Install Thor
```sh
git clone https://github.com/multiplus/thor
cd thor
bundle install
rake db:migrate RAILS_ENV=development 
```

### Run Thor, profit !
```sh
rails server -e development
```
http://127.0.0.1:3000/

### Version
0.1

## Todo's
 - Write todolist
 - Determine licence

## License
MIT

