#!/usr/bin/env ruby

require 'net/http'
i = 22
while i < 23
    lines = `curl http://www.quanben.io/n/aoshidanshen/#{i}.html`
    if lines =~ /\"ajax_post\((.+)\)\"/
        $1.delete "'"
        array = $1.split ','
        puts array
        get_content array

    end
    # file = File.new("#{i}.txt", "w")
    # file.write(lines)
    # file.close
    # i = i + 1
end

def get_content(arguments)
    c = arguments[0] ? arguments[0] : '';
    a = arguments[1] ? arguments[1] : '';
    for (i=2;i<arguments.length;i=i+2){
    field_name=arguments[i] ? arguments[i] : '';
    field_value=arguments[i+1] ? arguments[i+1] : '';
    ajax.setVar(field_name,field_value);
    }
    ajax.setVar('_type','ajax');
    ajax.requestFile ='/index.php?c='+c+'&a='+a;
    ajax.method='POST';
end