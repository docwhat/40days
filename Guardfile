#guard 'livereload' do
  #watch(%r{javascripts/.+\.js})
  #watch(%r{stylesheets/.+\.css})
  #watch(%r{index\.html})
#end

guard 'compass' do
  watch(/^sass\/(.*)\.s[ac]ss/)
  watch(/^config\.rb$/)
end

guard 'coffeescript', :input => 'coffeescripts', :output => 'javascripts'

