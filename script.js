const input = document.querySelector('input');
document.addEventListener('keydown', function(e) {
  if(e.keyCode === 13 && input.value){
    var node = document.createElement("DIV");
    node.style.color = "#888";
    node.style.fontSize = "12px";
    node.style.paddingLeft = '5px';

    //CODE HELP
    if(input.value === 'help'){
      //Supported commands:
      const p = document.createElement("p");
      p.style.display = 'block';
      p.appendChild(b1('Supported commands:'));
      //help - show commands
      const help = document.createElement("p");
      help.style.paddingLeft = "15px";
      help.appendChild(span('help'));
      var help_desc = text('show commands.');
      help_desc.style.paddingLeft = "80px";
      help.appendChild(help_desc);
      //github - go to my github
      const git = document.createElement("p");
      git.appendChild(span('git'));
      var git_desc = text('go to my github.');
      git_desc.style.paddingLeft = "87px";
      git.appendChild(git_desc);
      //twitter - go to my tt
      const twitter = document.createElement("p");
      twitter.appendChild(span('twitter'));
      var twitter_desc = text('go to my twitter.');
      twitter_desc.style.paddingLeft = "61px";
      twitter.appendChild(twitter_desc);
      //append various commands
      document.querySelector(".commands").appendChild(p).appendChild(help).appendChild(git).appendChild(twitter);
    //CODE GIT
    }else if(input.value === 'git'){
      window.open('https://github.com/surumkata', '_blank');
    //CODE TWITTER
    }else if(input.value === 'twitter'){
      window.open('https://twitter.com/imgeremias', '_blank');

    }else if(input.value === 'linkedin'){
      window.open('https://www.linkedin.com/in/tiago-silva-48b244248/', '_blank');

    }else if(input.value === 'insta'){
      window.open('https://www.instagram.com/surumkata/', '_blank');

    }else{
      const p = document.createElement("p");
      p.style.display = 'block';
      p.appendChild(error("command "));
      p.appendChild(bold(input.value));
      p.appendChild(error(" not found"));
      document.querySelector(".commands").appendChild(p);
    }
    input.value = "";
  }
});

function text(t){
  const text = document.createElement("text");
  text.innerHTML = t;
  return text;
}

function bold(text){
  var bold = document.createElement("b");
  bold.innerHTML = text;
  return bold;
}

function error(text){
  var error = document.createElement("error");
  error.innerHTML = text;
  return error;
}

function span(text){
  var span = document.createElement("span");
  span.innerHTML = text;
  return span;
}

function b1(text){
  var b1 = document.createElement("b1");
  b1.innerHTML = text;
  return b1;
}
