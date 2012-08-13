guard 'compass' do
  watch(/^src\/(.*)\.s[ac]ss/)
end

#guard 'process', :name => 'minify-js', :command => 'juicer merge js/all.js -o js/all.min.js --force -s' do
  #watch '^*'
#end

guard 'coffeescript', :input => 'coffeescripts', :output => 'javascripts'
