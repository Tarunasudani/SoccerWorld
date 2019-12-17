$('#bt1').click(function(req,res){
    console.log("button clicked");
    //res.render("index.html");
    var url1 = "http://api.football-data.org/v2/matches?status=SCHEDULED";
    $.ajax({
        headers: { 'X-Auth-Token': 'cee08a1bf40a43a6aa1d3c789473710b' },
        url: url1,
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        // do something with the response, e.g. isolate the id of a linked resource   
        $('#container1').empty();
        var count = response.count;
        console.log(count); 
        for(var i=0;i<count;i++){
          var fixture="";
          var fixture1="";
          fixture=fixture+response.matches[i].competition.name+":";
          fixture1=fixture1+response.matches[i].homeTeam.name+" vs "+response.matches[i].awayTeam.name;
          $("#container1").append('<li class="list-group-item ">'+fixture+'</li>');
          $("#container1").append('<li class="list-group-item ">'+fixture1+'</li>');
          $("#container1").append('<ul >'+'</ul>');
        }
        console.log(response);
      });
});

$('#bt2').click(function(req,res){
    console.log("button clicked");
    //res.render("index.html");
    var url1 = "http://api.football-data.org/v2/matches?status=LIVE";
    $.ajax({
        headers: { 'X-Auth-Token': 'cee08a1bf40a43a6aa1d3c789473710b' },
        url: url1,
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        // do something with the response, e.g. isolate the id of a linked resource  
        $('#container1').empty();
        var count = response.count;
        console.log(count); 
        for(var i=0;i<count;i++){
          var fixture="";
          var fixture1="";
          fixture=fixture+response.matches[i].competition.name+":";
          fixture1=fixture1+response.matches[i].homeTeam.name+" vs "+response.matches[i].awayTeam.name;
          $("#container1").append('<li >'+fixture+'</li>');
          $("#container1").append('<li >'+fixture1+'</li>');
        }
        console.log(response);

      });
});

$('#bt3').click(function(req,res){
    console.log("button clicked");
    //res.render("index.html");
    var url1 = "http://api.football-data.org/v2/matches?status=FINISHED";
    $.ajax({
        headers: { 'X-Auth-Token': 'cee08a1bf40a43a6aa1d3c789473710b' },
        url: url1,
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        // do something with the response, e.g. isolate the id of a linked resource 
        $('#container1').empty();
        var count = response.count;
        console.log(count); 
        for(var i=0;i<count;i++){
            var fixture="";
            var fixture1="";
            fixture=fixture+response.matches[i].competition.name+":";
            fixture1=fixture1+response.matches[i].homeTeam.name+" vs "+response.matches[i].awayTeam.name;
            $("#container1").append('<li class="list-group-item ">'+fixture+'</li>');
            $("#container1").append('<li class="list-group-item ">'+fixture1+'</li>');
        }  
        console.log(response);
      });
});


$('#bt4').click(function(req,res){
  console.log("button clicked");
  //res.render("index.html");
  var url1="https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=016aa60b4579a277d5fa98de8e30132a08d99cf90082799c3de161ecb0aadfb1";
  
  $.ajax({
      
      url: url1,
      
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource   
      $('#container2').empty();
      $('#container2').append('<h3>Team Name  :  Points</h3>');
      for(var i=0;i<20;i++){
        var team="";
        var n=i+1;
        team+=n.toString();
        team+=":    "+response[i].team_name;
        var points= response[i].overall_league_PTS;
        $("#container2").append('<li class="list-group-item ">'+team+" "+points+'</li>');
        
      }
      console.log(response);
    });
});

$('#bt5').click(function(req,res){
  console.log("button clicked");
  //res.render("index.html");
  var url1="https://apiv2.apifootball.com/?action=get_standings&country_id=135&league_id=468&APIkey=016aa60b4579a277d5fa98de8e30132a08d99cf90082799c3de161ecb0aadfb1";
  
  $.ajax({
      
      url: url1,
      
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource   
      $('#container2').empty();
      $('#container2').append('<h3>Team Name  :  Points</h3>');
      for(var i=0;i<20;i++){
        var team="";
        var n=i+1;
        team+=n.toString();
        team+=":    "+response[i].team_name;
        var points= response[i].overall_league_PTS;
        $("#container2").append('<li class="list-group-item ">'+team+" "+points+'</li>');
      }
      console.log(response);
    });
});

$('#bt6').click(function(req,res){
  console.log("button clicked");
  //res.render("index.html");
  var url1="https://apiv2.apifootball.com/?action=get_standings&league_id=195&APIkey=016aa60b4579a277d5fa98de8e30132a08d99cf90082799c3de161ecb0aadfb1";
  
  $.ajax({
      
      url: url1,
      
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource   
      $('#container2').empty();
      $('#container2').append('<h3>Team Name  :  Points</h3>');
      for(var i=0;i<18;i++){
        var team="";
        var n=i+1;
        team+=n.toString();
        team+=":    "+response[i].team_name;
        var points= response[i].overall_league_PTS;
        $("#container2").append('<li class="list-group-item ">'+team+" "+points+'</li>');
        
      }
      console.log(response);
    });
});

$('#bt7').click(function(req,res){
  console.log("button clicked");
  //res.render("index.html");
  var url1="https://apiv2.apifootball.com/?action=get_standings&league_id=176&APIkey=016aa60b4579a277d5fa98de8e30132a08d99cf90082799c3de161ecb0aadfb1";
  
  $.ajax({
      
      url: url1,
      
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource   
      $('#container2').empty();
      $('#container2').append('<h3>Team Name  :  Points</h3>');
      for(var i=0;i<20;i++){
        var team="";
        var n=i+1;
        team+=n.toString();
        team+=":    "+response[i].team_name;
        var points= response[i].overall_league_PTS;
        $("#container2").append('<li class="list-group-item ">'+team+" "+points+'</li>');
        
      }
      console.log(response);
    });
});