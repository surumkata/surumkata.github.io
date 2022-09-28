var cat = new Array(2);

for(let i = 0; i < 2; i++){
  cat[i] = new Boolean(false);
}

const input = document.querySelector('input');
document.addEventListener('keydown', function(e) {
  if(e.keyCode === 13 && input.value){
    var node = document.createElement("DIV");
    node.style.color = "#888";
    node.style.fontSize = "12px";
    node.style.paddingLeft = '5px';

    for(let i = 1; i <= 2; i++){
      if(cat[i-1] == true){
        cat[i-1] = false;
        document.getElementById('page' + i).style.width = "0px";
        document.getElementById('page' + i).style.height = "0px";
        document.getElementById('bpage' + i).style.opacity = "0%";
      }
    }

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
      //git - go to my github
      const git = document.createElement("p");
      git.appendChild(span('git'));
      var git_desc = text('go to my github.');
      git_desc.style.paddingLeft = "87px";
      git.appendChild(git_desc);
      //tt - go to my tt
      const tt = document.createElement("p");
      tt.appendChild(span('tt'));
      var tt_desc = text('go to my twitter.');
      tt_desc.style.paddingLeft = "93px";
      tt.appendChild(tt_desc);
      //ld - go to my linkedin
      const ld = document.createElement("p");
      ld.appendChild(span('ld'));
      var ld_desc = text('go to my linkedin.');
      ld_desc.style.paddingLeft = "93px";
      ld.appendChild(ld_desc);
      //insta - go to my linkedin
      const insta = document.createElement("p");
      insta.appendChild(span('insta'));
      var insta_desc = text('go to my instagram.');
      insta_desc.style.paddingLeft = "73px";
      insta.appendChild(insta_desc);
      //ls - show files
      const ls = document.createElement("p");
      ls.style.paddingLeft = "15px";
      ls.appendChild(span('ls'));
      var ls_desc = text('show files.');
      ls_desc.style.paddingLeft = "93px";
      ls.appendChild(ls_desc);
      //cat - view file
      const cat = document.createElement("p");
      cat.appendChild(span('cat [file]'));
      var cat_desc = text('view a file.');
      cat_desc.style.paddingLeft = "40px";
      cat.appendChild(cat_desc);
      //append various commands
      document.querySelector(".commands").appendChild(p).appendChild(help).appendChild(git).appendChild(tt).appendChild(ld).appendChild(insta);
      document.querySelector(".commands").appendChild(ls).appendChild(cat);
    //CODE GIT
    }else if(input.value === 'git'){
      window.open('https://github.com/surumkata', '_blank');
    //CODE TWITTER
    }else if(input.value === 'tt'){
      window.open('https://twitter.com/imgeremias', '_blank');
    //CODE LINKEDIN
    }else if(input.value === 'ld'){
      window.open('https://www.linkedin.com/in/tiago-silva-48b244248/', '_blank');
    //CODE INSTAGRAM
    }else if(input.value === 'insta'){
      window.open('https://www.instagram.com/surumkata/', '_blank');
    //CODE LS
    }else if(input.value === 'ls'){
      //Supported commands:
      const p = document.createElement("p");
      p.style.display = 'block';
      p.appendChild(bold('files: '));
      p.appendChild(b1('motosauro.md'));
      p.appendChild(text(', '));
      p.appendChild(b1('rastros.md'));
      document.querySelector(".commands").appendChild(p);
    //CODES CAT
    //CODE CAT MOTOSAURO.MD
    }else if(input.value === 'cat motosauro.md'){
        if(cat[0] == false){
          cat[0] = true;
          document.getElementById('page1').style.width = "470px";
          document.getElementById('page1').style.height = "600px";
          document.getElementById('bpage1').style.opacity = "100%";
        }
    //CODE CAT RASTROS.MD
    }else if(input.value === 'cat rastros.md'){
        if(cat[1] == false){
          cat[1] = true;
          document.getElementById('page2').style.width = "470px";
          document.getElementById('page2').style.height = "600px";
          document.getElementById('bpage2').style.opacity = "100%";
        }
    }else if(input.value === 'run space_invaders'){
        window.location.replace("games/space_invaders/index.html");
    }else{
      const p = document.createElement("p");
      p.style.display = 'block';
      p.appendChild(text("Command "));
      p.appendChild(error(input.value));
      p.appendChild(text(" not found!"));
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
