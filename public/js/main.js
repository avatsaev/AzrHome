$(function(){

  console.log("i'm ready motherfuckers");

  $(".turn-on").click(function(){

    jsonData = {
      action: 'on'
    }

    $.ajax({
        type: 'GET',
        url: '/lamp-on',
        dataType: 'json',
        processData: false, //added this to see if it helps, it didn't
        contentType: "application/json",
        async: false,
        data: JSON.stringify(jsonData),
        success: function(data){
            console.log(data);
        },
        error: function(data){
            //This is where I get as my backend throws a 400 on me due to the screwed up json
            console.log(data);
        }
    })



  })

  $(".turn-off").click(function(){

    jsonData = {
      action: 'off'
    }

    $.ajax({
        type: 'GET',
        url: '/lamp-off',
        dataType: 'json',
        processData: false, //added this to see if it helps, it didn't
        contentType: "application/json",
        async: false,
        data: JSON.stringify(jsonData),
        success: function(data){
            console.log(data);
        },
        error: function(data){
            //This is where I get as my backend throws a 400 on me due to the screwed up json
            console.log(data);
        }
    })



  })

})
