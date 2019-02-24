#!/usr/bin/env ruby
i = 22
while i < 3820
    lines = `phantomjs artical_content.js http://www.quanben.io/n/aoshidanshen/#{i}.html`
    
    file = File.new("#{i}.txt", "w")
    file.write(lines)
    file.close
    i = i + 1
end