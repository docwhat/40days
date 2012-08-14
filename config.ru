require 'rack'
#require 'rack-livereload'
#use Rack::LiveReload
use Rack::Static, urls: ["/javascripts", "/stylesheets"]

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}
