(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(9),l=a.n(r),i=a(2),n=a(3),o=a(5),h=a(4),p=a(1),m=a(6),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={clicked:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(){for(var e=!0,t=0;t<this.props.theClicked.length;t++)this.props.theClicked[t]===this.props.src&&(e=!1);e?(console.log(this.state.clicked),this.props.theClicked.push(this.props.src),this.props.scoreUp()):this.props.gameOver()}},{key:"render",value:function(){return c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"box"},c.a.createElement("img",{alt:this.props.alt,src:this.props.src,onClick:this.handleClick})))}}]),t}(c.a.Component),u=a(7);console.log(u);var g=u;console.log(g);var v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(h.a)(t).call(this))).state={score:0,goMessage:"Good Luck!",theClicked:[]},e.scoreUp=e.scoreUp.bind(Object(p.a)(e)),e.gameOver=e.gameOver.bind(Object(p.a)(e)),e}return Object(m.a)(t,e),Object(n.a)(t,[{key:"scoreUp",value:function(){this.setState(function(e){return{score:e.score+1}}),this.shuffleImages()}},{key:"shuffleImages",value:function(){for(var e=[],t=0;t<9;t++){var a=Math.floor(Math.random()*g.length),s=g[a];e.push(s),g.splice(a,1)}g=e}},{key:"gameOver",value:function(){this.setState({score:0}),this.setState({goMessage:"You missed, try again!"}),this.shuffleImages(),this.setState({theClicked:[]})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,"Score: ",this.state.score),c.a.createElement("h3",null,this.state.goMessage),c.a.createElement("div",{className:"columns"},c.a.createElement(d,{alt:g[0].alt,src:g[0].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked}),c.a.createElement(d,{alt:g[1].alt,src:g[1].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked}),c.a.createElement(d,{alt:g[2].alt,src:g[2].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked})),c.a.createElement("div",{className:"columns"},c.a.createElement(d,{alt:g[3].alt,src:g[3].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked}),c.a.createElement(d,{alt:g[4].alt,src:g[4].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked}),c.a.createElement(d,{alt:g[5].alt,src:g[5].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked})),c.a.createElement("div",{className:"columns"},c.a.createElement(d,{alt:g[6].alt,src:g[6].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked}),c.a.createElement(d,{alt:g[7].alt,src:g[7].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked}),c.a.createElement(d,{alt:g[8].alt,src:g[8].src,scoreUp:this.scoreUp,gameOver:this.gameOver,theClicked:this.state.theClicked})))}}]),t}(c.a.Component);var O=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"box header"},c.a.createElement("div",{className:"container header"},c.a.createElement("h1",null,"Can You Keep these Metal Album Covers Straight?"))))};var k=function(){return c.a.createElement("div",null,c.a.createElement(O,null),c.a.createElement(v,null))},C=(a(16),document.getElementById("root"));l.a.render(c.a.createElement(k,null),C)},7:function(e){e.exports=[{alt:"Uncle Acid The Night Creeper",src:"https://www.angrymetalguy.com/wp-content/uploads/2015/08/Uncle-Acid-The-Night-Creeper-01.jpg"},{alt:"Uncle Acid Mind Control",src:"http://www.metalblade.com/us/covers/UncleAcidAndTheDeadbeats-MindControl.jpg"},{alt:"Uncle Acid Blood Lust",src:"http://theobelisk.net/obelisk/wp-content/uploads/2012/01/uncleacidcover.jpg"},{alt:"Judas Priest FIREPOWER",src:"https://www.angrymetalguy.com/wp-content/uploads/2018/02/Judas-Priest_Firepower.jpg"},{alt:"Electric Wizard Dopethrone",src:"https://imagescdn.juno.co.uk/full/CS574118-01A-BIG.jpg"},{alt:"Goya Obelisk",src:"https://tse3.mm.bing.net/th?id=OIP._qiaVr9MeBeK2omxCu7o8wHaHa&pid=Api"},{alt:"Sepultura Roots",src:"https://tse2.mm.bing.net/th?id=OIP.UHsinRMODQP0sNYyy_vZ0wHaHb&pid=Api"},{alt:"Mastodon Leviathan",src:"https://tse4.mm.bing.net/th?id=OIP.NQZuhX_JnZt92vBiSP7YdAHaHa&pid=Api"},{alt:"Mick Gordon DOOM OST",src:"https://tse3.mm.bing.net/th?id=OIP.RwdvD6xKP5oSOtdpuBYAZgHaHa&pid=Api"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.d305122d.chunk.js.map