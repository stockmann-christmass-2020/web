(this.webpackJsonpstockmann=this.webpackJsonpstockmann||[]).push([[0],{22:function(t){t.exports=JSON.parse('{"en":{"btn":"Enter the Christmas world","body":"This year we\u2019re all dreaming of spending time with our families and meeting each other again. We hope that your holiday season may be full of gifts of happiness and joy and light in the dark of winter.","heading":"Merry Christmas and a Happy New Year! Looking forward to seeing you again in 2021!"},"fi":{"btn":"Astu joulumaailmaan!","body":"T\xe4n\xe4 vuonna haaveilemme kaikki yhteisest\xe4 ajasta perheidemme kanssa ja siit\xe4, ett\xe4 tapaisimme toisemme j\xe4lleen. Toivomme, ett\xe4 joulunaikasi on t\xe4ynn\xe4 onnen ja riemun lahjoja sek\xe4 valoa talven pimeydess\xe4.","heading":"Hyv\xe4\xe4 joulua ja onnellista uutta vuotta! N\xe4hd\xe4\xe4n taas vuonna 2021!"},"sv":{"btn":"Stig in i julv\xe4rlden","body":"I \xe5r dr\xf6mmer vi alla om att f\xe5 tillbringa tid med v\xe5ra familjer och att kunna tr\xe4ffa varandra igen. Vi hoppas att din jultid \xe4r fylld med g\xe5vor av gl\xe4dje och lycka samt ljus i den m\xf6rka vintern.","heading":"God jul och gott nytt \xe5r! Vi ses igen \xe5r 2021"},"et":{"btn":"Sisene j\xf5ulumaailma","body":"Sel aastal unistame me k\xf5ik, et saaks veeta aega oma l\xe4hedastega ja taas \xfcksteisega kohtuda. Soovime, et p\xfchadeaeg tooks Sulle r\xf5\xf5mu, armastust ja soojust, et ka k\xf5ige pimedamad talve\xf5htud oleksid helgemad!","heading":"Imelist j\xf5uluaega ja rahulikku aastavahetust! Peatse kohtumiseni 2021. aastal!"},"lv":{"btn":"Laipni l\u016bgti Ziemassv\u0113tku pasaul\u0113","body":"\u0160\u012b gada nogal\u0113 izbaud\u012bsim laiku kop\u0101 ar pa\u0161iem m\u012b\u013c\u0101kajiem un tuv\u0101kajiem. Nov\u0113lam, lai sv\u0113tku laiks b\u016btu piepild\u012bts ar sirsn\u012bbu, siltumu, prieku un gaid\u012bt\u0101m d\u0101van\u0101m!","heading":"Priec\u012bgus sv\u0113tkus un uz tik\u0161anos jaunaj\u0101 gad\u0101, lai ar jaunu iedvesmu \u012bstenotu sap\u0146us!"}}')},40:function(t,e,n){},41:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var i=n(6),a=n(2),o=n.n(a),r=n(30),s=n.n(r),l=(n(40),n(28)),d=n(12),h=(n(41),n(13)),c=n(1),p=n(5),m=n(3),u=n(4),g=n(0);function f(){var t=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n"]);return f=function(){return t},t}var v=h.a.canvas(f()),w=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).loadContent=t.loadContent,i.unloadContent=t.unloadContent,i.canvasID=t.id,i.canvasAlpha=t.alpha||!1,i.canvasPerformance=t.performance||"high-performance",i.ambientIntensity=t.ambient||.3,i.ambientColor=t.ambientColor||16777215,i.resizeNeeded=!0,i}return Object(p.a)(n,[{key:"animate",value:function(t){var e=this;e.scene.traverse((function(n){var i=t-e.previousTime;i>0&&n.step&&n.step(i)})),e.renderer.render(e.scene,e.camera),e.previousTime=t,e.frameRequest=window.requestAnimationFrame(e.animate.bind(e))}},{key:"createCamera",value:function(){var t=document.getElementById(this.canvasID),e=t.clientHeight,n=t.clientWidth;this.camera=new g.r(90,n/e,.1,1e4),this.camera.position.z=n/this.camera.aspect/(2*Math.tan(this.camera.fov*Math.PI/360))}},{key:"createRenderer",value:function(){var t=this;this.renderer=new g.D({canvas:document.getElementById(t.canvasID),powerPreference:t.canvasPerformance,antialias:!0,stencil:!1,alpha:t.canvasAlpha})}},{key:"addResizeBehavior",value:function(){var t=this,e=this;function n(){var t=e.renderer.domElement,n=window.devicePixelRatio,i=t.clientWidth*n|0,a=t.clientHeight*n|0,o=t.width!==i||t.height!==a;return o&&e.renderer.setSize(i,a,!1),o}window.addEventListener("resize",(function(){t.resizeNeeded=!0})),this.scene.step=function(){e.resizeNeeded&&(e.resizeNeeded=!1,this.traverse((function(t){t.resize&&t.resize()})))},n(),e.scene.resize=function(){var t=document.getElementById(e.canvasID).clientWidth,i=document.getElementById(e.canvasID).clientHeight;n(),e.camera.aspect=t/i,e.camera.position.z=t/e.camera.aspect/(2*Math.tan(e.camera.fov*Math.PI/360)),e.camera.updateProjectionMatrix()}}},{key:"componentDidMount",value:function(){this.scene=new g.v,this.createCamera(),this.createRenderer(),this.addResizeBehavior(),this.ambientLight=new g.a(this.ambientColor,this.ambientIntensity),this.scene.add(this.ambientLight),this.loadContent(this.scene,this.camera,this.renderer),this.previousTime=0,this.animate(0)}},{key:"componentWillUnmount",value:function(){this.unloadContent&&this.unloadContent(),window.cancelAnimationFrame(this.frameRequest),this.renderer.forceContextLoss(),this.renderer=null,this.scene=null}},{key:"render",value:function(){return Object(i.jsx)(v,{id:this.props.id,className:this.props.className})}}]),n}(o.a.Component),b=n(25),y=new b.a,x={new:function(t,e,n){var i=new g.i;return y.load(t,(function(t){for(var a=t.paths,o=new g.i,r=0;r<a.length;r++){for(var s=a[r],l=new g.o({color:s.color,side:g.f,depthWrite:!!n,depthTest:!!n}),d=s.toShapes(!0),h=0;h<d.length;h++){var c=d[h],p=new g.x(c);p.applyMatrix4((new g.m).makeScale(1,-1,1));var m=new g.n(p,l);o.add(m)}var u=s.userData.style.stroke;if(void 0!==u&&"none"!==u)for(var f=new g.o({color:(new g.e).setStyle(u),opacity:s.userData.style.strokeOpacity,transparent:s.userData.style.strokeOpacity<1,side:g.f,depthWrite:!!n,depthTest:!!n}),v=0,w=s.subPaths.length;v<w;v++){var y=s.subPaths[v],x=b.a.pointsToStroke(y.getPoints(),s.userData.style);if(x.applyMatrix4((new g.m).makeScale(1,-1,1)),x){var j=new g.n(x,f);o.add(j)}}}var k=(new g.b).setFromObject(o).getSize();o.position.x=-k.x/2,o.position.y=k.y/2,i.add(o),i.bsize=k,e(i)}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("An error happened")})),i}},j={new:function(t,e,n,i){var a=new g.z,o=new g.o({map:a.load(t,(function(t){i.initTexture(t)}))});o.depthTest=!1,o.depthWrite=!1,o.transparent=!0;var r=new g.s(1,1),s=new g.n(r,o);return e&&(s.scale.x=e),n&&(s.scale.y=n),s}},k={new:function(t,e,n){var i={};return i.duration=t,i.startTime=null,i.finished=!1,i.start=function(t){var e=this;t?setTimeout((function(){e.startTime=Date.now()}),t):this.startTime=Date.now()},i.getUnEasedProgress=function(){if(!this.startTime)return 0;if(this.finished)return 1;var t=(Date.now()-this.startTime)/this.duration;return t>=1&&(this.finished=!0,n&&n()),Math.min(t,1)},i.getProgress=function(){var t=this.getUnEasedProgress();return e&&t&&(t=e(t)),t},i}},O=n(17),z={new:function(t){var e=new g.w({uniforms:{tex:{type:"t",value:null}},vertexShader:"\nprecision mediump float;\nvarying vec2 vUv;\n  \nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nprecision mediump float;\nuniform sampler2D tex;\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 color = vec4(texture2D(tex, vUv)).rgb;\n  float alpha = 1.0;\n  float limit = 0.8;\n  if(color.r > limit && color.g > limit && color.b > limit) discard;\n  if(color.r < 0.1 && color.g < 0.1 && color.b < 0.1) color = vec3(0.0, 0.1411764705882353, 0.10588235294117647);\n  gl_FragColor = vec4(color.rgb, alpha);\n}",blending:g.p,visible:!1,depthWrite:!0,depthTest:!0,transparent:!0,side:g.f}),n=new g.s(1,1),i=new g.n(n,e),a=document.createElement("video");a.setAttribute("width","1920"),a.setAttribute("height","1080"),a.setAttribute("loop","loop"),a.setAttribute("muted","muted"),a.setAttribute("playsinline","playsinline"),t.map((function(t){var e=document.createElement("source");return e.setAttribute("src",t),e.setAttribute("type",-1!==t.indexOf("mp4")?"video/mp4":"video/webm"),a.appendChild(e),!0})),a.addEventListener("loadstart",(function(){e.visible=!0,e.needsUpdate=!0})),i.video=a,document.getElementById("videos").appendChild(a);var o=new g.C(a);return o.minFilter=g.j,o.magFilter=g.j,o.format=g.u,e.uniforms.tex.value=o,i}},M={new:function(t,e,n,i,a){for(var o={tex:{type:"t",value:(new g.z).load(t)},time:{type:"1f",value:0},resoY:{type:"1f",value:i},alpha:{type:"1f",value:0}},r=new g.w({uniforms:o,vertexShader:"\nprecision mediump float;\nattribute float a_rands;\nuniform float time;\nuniform float resoY;\n  \nvoid main() {\n  float y = resoY / 2.0 - mod(position.y + time, resoY*0.6); \n  float x = position.x + sin(y * 0.01 + a_rands) * 10.0; \n  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, position.z,1.0);\n  gl_PointSize = 5.0 + a_rands * 12.0;\n}",fragmentShader:"\nprecision mediump float;\nuniform sampler2D tex;\nuniform float alpha;\n\nvoid main() {\n  vec4 color = texture2D(tex, gl_PointCoord);\n  gl_FragColor = vec4(color.rgb, color.a * alpha * 0.9);\n}",blending:g.p,depthTest:!0,depthWrite:!1,transparent:!0}),s=new g.d,l=new Float32Array(3*e),d=new Float32Array(1*e),h=0,c=0;h<e;h++,c+=3)l[c]=Math.random()*n-n/2,l[c+1]=Math.random()*i-i/2,l[c+2]=Math.random()*a-a/2,d[h]=Math.random();s.setAttribute("position",new g.c(l,3)),s.setAttribute("a_rands",new g.c(d,1));var p=new g.t(s,r);return p.tara=0,p.step=function(t){this.material.uniforms.time.value+=2,this.material.uniforms.alpha.value=Object(O.a)(this.material.uniforms.alpha.value,this.tara,t,10)},p}},_={new:function(t,e,n,i,a,o){for(var r={tex:{type:"t",value:(new g.z).load(t)},time:{type:"1f",value:0},limit:{type:"1f",value:0},height:{type:"1f",value:i}},s=new g.w({uniforms:r,vertexShader:"\nprecision mediump float;\nattribute float a_rands;\nuniform float height;\nuniform float time;\nvarying vec2 rand;\n  \nvoid main() {\n  rand = vec2(a_rands, (position.y + height/2.0) / height);\n  float blink = 0.3 + 0.7 * abs(sin(a_rands * 123.3 + time));\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n  gl_PointSize = 5.0 + a_rands * 10.0 * blink;\n}",fragmentShader:"\nprecision mediump float;\nuniform sampler2D tex;\nvarying vec2 rand;\nuniform float time;\nuniform float limit;\n\nvoid main() {\n  vec4 color = texture2D(tex, gl_PointCoord);\n  float show = rand.y < limit ? 1.0 : 0.0; \n  gl_FragColor = vec4(color.rgb, color.a * show);\n}",blending:g.p,depthTest:!1,depthWrite:!1,transparent:!0,visible:!1}),l=new g.d,d=new Float32Array(3*e),h=new Float32Array(1*e),c=null,p=0,m=0;p<e;p++,m+=3)d[m]=Math.random()*n-n/2,c=Math.random(),d[m+1]=c*i-i/2,d[m+2]=0,h[p]=Math.random();l.setAttribute("position",new g.c(d,3)),l.setAttribute("a_rands",new g.c(h,1));var u=new g.t(l,s);return u.progress=k.new(a,(function(t){return t<.5?2*t*t:(4-2*t)*t-1})),u.lightUp=function(){this.material.visible=!0,this.progress.start(o)},u.step=function(){this.material.uniforms.time.value+=.1,this.material.uniforms.limit.value=this.progress.getProgress()},u}},C={new:function(t,e,n,i,a,o){for(var r={tex:{type:"t",value:(new g.z).load(t)},time:{type:"1f",value:0},limit:{type:"1f",value:0},height:{type:"1f",value:i}},s=new g.w({uniforms:r,vertexShader:"\nprecision mediump float;\nattribute float a_rands;\nuniform float height;\nuniform float time;\nuniform float limit;\n  \nvoid main() {\n  float blink = 0.3 + 0.7 * abs(sin(a_rands * 123.3 + time));\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y * limit,0.0,1.0);\n  gl_PointSize = 5.0 + a_rands * 10.0 * blink;\n}",fragmentShader:"\nprecision mediump float;\nuniform sampler2D tex;\nuniform float time;\nuniform float limit;\n\nvoid main() {\n  vec4 color = texture2D(tex, gl_PointCoord);\n  float show = min(limit, 0.1) * 10.0; \n  gl_FragColor = vec4(color.rgb, color.a * show);\n}",blending:g.p,depthTest:!1,depthWrite:!1,transparent:!0,visible:!1}),l=new g.d,d=new Float32Array(3*e),h=new Float32Array(1*e),c=null,p=0,m=0;p<e;p++,m+=3)d[m]=Math.random()*n-n/2,c=1.2*Math.sin(Math.PI+Math.PI*((d[m]+n/2)%(n/4))/(n/4)),d[m+1]=c*i-i/2+Math.random()*i/3,d[m+2]=0,h[p]=Math.random();l.setAttribute("position",new g.c(d,3)),l.setAttribute("a_rands",new g.c(h,1));var u=new g.t(l,s);return u.step=function(){this.material.uniforms.time.value+=.1,this.material.uniforms.limit.value=this.progress.getProgress()},u.progress=k.new(a,(function(t){return t<.5?2*t*t:(4-2*t)*t-1})),u.lightUp=function(){this.material.visible=!0,this.progress.start(o)},u}},P=function(){function t(e){Object(c.a)(this,t),this.time=0}return Object(p.a)(t,[{key:"createContent",value:function(t){var e=k.new(14e3,(function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t}),(function(){h.lightUp(),l.lightUp(),n.progress.start(5e3),i.progress.start(0)}));window.startCamera=function(){e.start(),u.p1.video.play(),u.p2.video.play(),f.tara=1};var n=document.getElementById("heading");n.progress=k.new(500,(function(t){return t<.5?2*t*t:(4-2*t)*t-1}));var i=document.getElementById("bodyCopy");i.progress=k.new(1500,(function(t){return t<.5?2*t*t:(4-2*t)*t-1}));var a=new g.i;a.scale.x=a.scale.y=13*Math.min(window.innerHeight/1080,1),a.startY=1200*t.domElement.clientHeight/1080,a.resize=function(){a.startY=1200*t.domElement.clientHeight/1080},window.innerWidth>768&&window.addEventListener("mousemove",(function(t){a.tarx=(t.clientX-window.innerWidth/2)/(window.innerWidth/2),a.tary=(t.clientY-window.innerHeight/2)/(window.innerHeight/2)})),a.endZ=window.innerWidth>600?-19e3:-21e3,a.tarx=0,a.tary=0,a.panY=0;var o=e.getProgress(),r=1;window.addEventListener("wheel",(function(t){n.progress.finished&&(r+=.003*t.deltaY,r=Math.max(0,Math.min(r,1)))})),a.step=function(t){((o=e.finished?o:e.getProgress())>.7||e.finished)&&(this.position.x=Object(O.a)(this.position.x,500*this.tarx,t,10)),(o>.7||e.finished)&&(this.panY=Object(O.a)(this.panY,50*this.tary,t,10)),e.finished?(o=Object(O.a)(o,r,t,10),this.position.z=this.endZ*o,this.position.y=this.startY-this.startY*o-Number(this.panY)):(this.position.y=this.startY-this.startY*o-Number(this.panY),this.position.z=this.endZ*o),n.style.opacity=n.progress.finished?o>.95?1:0:n.progress.getProgress(),i.style.opacity=i.progress.finished?o>.95?1:0:i.progress.getProgress()};var s=x.new("imgs/house2.svg");a.add(s),s.position.y=150;var l=new g.i;a.add(l),l.position.y=130,l.lightUp=function(){l.t1.lightUp(),l.t2.lightUp(),l.t3.lightUp(),l.t4.lightUp(),l.t5.lightUp(),l.t6.lightUp(),l.t7.lightUp(),l.t8.lightUp(),l.topleft.lightUp(),l.topright.lightUp(),l.center.lightUp()};var d=1500;l.t1=_.new("imgs/light.png",110,33,500,d,1125),l.add(l.t1),l.t1.position.x=-415,l.t1.position.y=-90,l.t2=_.new("imgs/light.png",110,33,500,d,750),l.add(l.t2),l.t2.position.x=-575,l.t2.position.y=-90,l.t3=_.new("imgs/light.png",110,33,500,d,375),l.add(l.t3),l.t3.position.x=-735,l.t3.position.y=-90,l.t4=_.new("imgs/light.png",110,33,500,d,0),l.add(l.t4),l.t4.position.x=-895,l.t4.position.y=-90,l.t5=_.new("imgs/light.png",110,33,500,d,1125),l.add(l.t5),l.t5.position.x=415,l.t5.position.y=-90,l.t6=_.new("imgs/light.png",110,33,500,d,750),l.add(l.t6),l.t6.position.x=575,l.t6.position.y=-90,l.t7=_.new("imgs/light.png",110,33,500,d,375),l.add(l.t7),l.t7.position.x=735,l.t7.position.y=-90,l.t8=_.new("imgs/light.png",110,33,500,d,0),l.add(l.t8),l.t8.position.x=895,l.t8.position.y=-90,l.topleft=_.new("imgs/light.png",150,33,720,d,d),l.add(l.topleft),l.topleft.rotation.z=-Math.PI/2,l.topleft.position.x=-640,l.topleft.position.y=310,l.topright=_.new("imgs/light.png",150,33,720,d,d),l.add(l.topright),l.topright.rotation.z=Math.PI/2,l.topright.position.x=640,l.topright.position.y=310,l.center=C.new("imgs/light.png",200,540,90,d,3e3),l.add(l.center),l.center.position.x=0,l.center.position.y=360;var h=new g.i;a.add(h),h.position.y=10,h.bg=j.new("imgs/title.png",571,57,t),h.add(h.bg),h.progress=k.new(1e3),h.lightUp=function(){this.chars.forEach((function(t){t.material.visible=!0})),this.progress.start(6e3)},h.time=0,h.step=function(t){this.finished||(this.time=this.progress.getProgress(),this.chars[0].material.opacity=Math.floor(this.time),this.chars[1].material.opacity=this.time>.9?1:0,this.chars[2].material.opacity=this.time>.8||this.time>.15&&this.time<.45?1:0,this.chars[3].material.opacity=this.time>.7?1:0,this.chars[4].material.opacity=this.time>.6?1:0,this.chars[5].material.opacity=this.time>.7||this.time>.35&&this.time<.45?1:0,this.chars[6].material.opacity=this.time>.8?1:0,this.chars[7].material.opacity=this.time>.9||this.time>0&&this.time<.45?1:0,this.chars[8].material.opacity=Math.floor(this.time),this.progress.finished&&(this.finished=!0))},h.chars=[],h.chars[0]=j.new("imgs/title_s.png",57,55,t),h.add(h.chars[0]),h.chars[0].position.x=-255.5,h.chars[0].material.opacity=0,h.chars[0].material.visible=!0,h.chars[1]=j.new("imgs/title_t.png",49,52,t),h.add(h.chars[1]),h.chars[1].position.x=-203,h.chars[1].material.opacity=0,h.chars[1].material.visible=!1,h.chars[2]=j.new("imgs/title_o.png",68,53,t),h.add(h.chars[2]),h.chars[2].position.x=-149,h.chars[2].material.opacity=0,h.chars[2].material.visible=!1,h.chars[3]=j.new("imgs/title_c.png",66,53,t),h.add(h.chars[3]),h.chars[3].position.x=-79,h.chars[3].material.opacity=0,h.chars[3].material.visible=!1,h.chars[4]=j.new("imgs/title_k.png",62,52,t),h.add(h.chars[4]),h.chars[4].position.x=-12,h.chars[4].material.opacity=0,h.chars[4].material.visible=!1,h.chars[5]=j.new("imgs/title_m.png",68.5,52,t),h.add(h.chars[5]),h.chars[5].position.x=55.5,h.chars[5].material.opacity=0,h.chars[5].material.visible=!1,h.chars[6]=j.new("imgs/title_a.png",68,52,t),h.add(h.chars[6]),h.chars[6].position.x=125,h.chars[6].material.opacity=0,h.chars[6].material.visible=!1,h.chars[7]=j.new("imgs/title_n.png",58,52,t),h.add(h.chars[7]),h.chars[7].position.x=190,h.chars[7].material.opacity=0,h.chars[7].material.visible=!1,h.chars[8]=j.new("imgs/title_n.png",57.5,52,t),h.add(h.chars[8]),h.chars[8].position.x=255,h.chars[8].material.opacity=0,h.chars[8].material.visible=!1;var c=new g.i;a.add(c),c.position.y=-85,c.bg=x.new("imgs/clock.svg"),c.add(c.bg),c.hands=new g.i,c.add(c.hands),c.hands.rotation.y=.15*-Math.PI,c.hands.step=function(t){c.hours.rotation.z-=t/1e4,c.minutes.rotation.z-=t/1e4*12},c.hours=new g.i,c.hands.add(c.hours),c.hours.position.x=-2,c.hours.position.y=-2,c.hours.img=x.new("imgs/clock_h.svg",(function(){c.hours.img.position.y=.4*c.hours.img.bsize.y})),c.hours.add(c.hours.img),c.minutes=new g.i,c.hands.add(c.minutes),c.minutes.img=x.new("imgs/clock_m.svg",(function(){c.minutes.img.position.y=.4*c.minutes.img.bsize.y})),c.minutes.add(c.minutes.img),c.minutes.position.x=-2,c.minutes.position.y=-2;var p=j.new("imgs/people1.png",578.4,172.8,t);a.add(p),p.position.z=window.innerWidth>600?7e3:9e3,p.position.y=-140,p.position.x=20,p.material.depthTest=!0,p.material.depthWrite=!0,p.material.alphaTest=.1;var m=j.new("imgs/people2.png",469.2,106.2,t);a.add(m),m.position.z=window.innerWidth>600?15e3:17e3,m.position.y=-80,m.position.x=-35,m.material.depthTest=!0,m.material.depthWrite=!0,m.material.alphaTest=.1;var u=new g.i;a.add(u),u.position.z=window.innerWidth>600?18e3:2e4,u.position.y=-50,u.p1=z.new(["imgs/stock_naine_02.mp4","imgs/stock_naine_02.webmhd.webm"]),u.add(u.p1),u.p1.scale.x=96,u.p1.scale.y=54,u.p1.position.x=-60,u.p1.step=function(){this.material.needsUpdate=!0},u.p2=z.new(["imgs/stock_laps_03.mp4","imgs/stock_laps_03.webmhd.webm"]),u.add(u.p2),u.p2.scale.x=-96,u.p2.scale.y=54,u.p2.position.x=200,u.p2.position.z=-10,u.p2.time=0,u.p2.prog=0,u.p2.step=function(t){this.time+=10,this.material.needsUpdate=!0,this.prog=this.time%1e4,this.prog<5e3?(this.position.x=200-400*this.prog/5e3,this.rotation.y=0):(this.position.x=400*(this.prog-5e3)/5e3-200,this.rotation.y=Math.PI)};var f=M.new("imgs/snow.png",1300,2e3,2e3,2e4);return a.add(f),f.position.z=9500,a}},{key:"start",value:function(t,e,n){this.content=this.createContent(n),t.background=new g.e(2441780),t.add(this.content),e.fov=30,e.updateProjectionMatrix()}},{key:"stop",value:function(){}}]),t}(),S=n(22);function E(){var t=Object(d.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 70px;\n  height: 70px;\n  transform: translate(-50%, -50%);\n  z-index: 500;\n  display: none;\n  \n  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n    display: block\n  }\n"]);return E=function(){return t},t}function A(){var t=Object(d.a)(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  display: block;\n  cursor: pointer;\n  z-index: 400;\n  transform: scale(2);\n"]);return A=function(){return t},t}function I(){var t=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-width: 1920px;\n  max-height: 1080px;\n  background: #254234;\n  \n  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n    display: none\n  }\n"]);return I=function(){return t},t}function U(){var t=Object(d.a)(["\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  font-family: 'StockmannSans', Arial, sans-serif;\n  font-size: 18px;\n  font-weight: 300;\n  width: 40%;\n  min-width: 320px;\n  z-index: 200;\n  color: #ffffff;\n  opacity: 0;\n  pointer-events: none;\n  line-height: 1;\n  \n  @media screen and (min-width: 600px) {\n    bottom: max(10%, 40px);\n    top: unset;\n  }\n"]);return U=function(){return t},t}function L(){var t=Object(d.a)(["\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  font-family: 'StockmannSans', Arial, sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  z-index: 200;\n  color: #ffffff;\n  opacity: 0;\n  max-width: 320px;\n  pointer-events: none;\n  text-transform: uppercase;\n  line-height: 1;\n  \n  @media screen and (min-width: 600px) {\n    font-size: 20px;\n  }\n"]);return L=function(){return t},t}function T(){var t=Object(d.a)(["\n  position: absolute;\n  z-index: 0;\n  opacity: 0;\n"]);return T=function(){return t},t}function D(){var t=Object(d.a)(["\n  position: absolute;\n  left: 50%;\n  top: 105vw;\n  transform: translate(-50%, 0);\n  display: block;\n  background: #254234;\n  color: #ffffff;\n  font-family: 'StockmannSans', Arial, sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 1rem 2rem;\n  border: 4px solid #E09E42;\n  border-radius: 3px;\n  z-index: 20;\n  ","\n  opacity: ",";\n  transition: opacity 0.25s ease-in-out;\n  line-height: 1;\n  \n  @media screen and (min-width: 600px) {\n    font-size: 28px;\n    bottom: 10%;\n    top: unset;\n    transform: translate(-50%, 0);\n  }\n  \n  &:hover {\n    background: #E09E42;\n    color: #15241e;\n  }\n"]);return D=function(){return t},t}function W(){var t=Object(d.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  max-width: 1920px;\n  max-height: 1080px;\n  z-index: 10;\n  border: 2px solid #E09E42;\n"]);return W=function(){return t},t}function Y(){var t=Object(d.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  audio {\n    opacity: 0;\n    pointer-events: none;\n  }\n"]);return Y=function(){return t},t}var B=h.a.div(Y()),F=Object(h.a)(w)(W()),H=h.a.a(D(),(function(t){return t.hide?"pointer-events: none;":"cursor:pointer;"}),(function(t){return t.hide?0:1})),N=h.a.div(T()),V=h.a.p(L()),R=h.a.p(U()),Z=h.a.div(I()),q=h.a.a(A()),J=h.a.div(E()),X=new P;window.cameraStarted=!1;var G=function(t){var e=o.a.useState(!1),n=Object(l.a)(e,2),a=n[0],r=n[1],s=o.a.useState(!1),d=Object(l.a)(s,2),h=d[0],c=d[1];return Object(i.jsxs)(B,{className:"app",children:[Object(i.jsxs)(Z,{children:[Object(i.jsx)(F,{loadContent:function(t,e,n){n.sortObjects=!1,n.precision="lowp",e.far=5e4,e.updateProjectionMatrix(),X.start(t,e,n)},unloadContent:function(){X.stop()},id:"card-canvas",ambient:1,performance:"low-power"}),Object(i.jsx)(H,{hide:a,onClick:function(){a||(r(!0),document.getElementById("music").play(),window.startCamera())},children:S[t.lang].btn}),Object(i.jsx)(V,{id:"heading",children:S[t.lang].heading}),Object(i.jsx)(R,{id:"bodyCopy",children:S[t.lang].body}),!h&&a&&Object(i.jsx)(q,{onClick:function(){document.getElementById("music").pause(),c(!0)},children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(i.jsx)("path",{fill:"#ffffff",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"})})}),h&&a&&Object(i.jsx)(q,{onClick:function(){document.getElementById("music").play(),c(!1)},children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(i.jsx)("path",{fill:"#ffffff",d:"M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"})})})]}),Object(i.jsx)(J,{children:Object(i.jsx)("img",{src:"imgs/portrait.svg",alt:""})}),Object(i.jsx)(N,{id:"videos"}),Object(i.jsx)("audio",{id:"music",src:"imgs/music.mp3"})]})},K=n(34),Q=n(7),$="/";"magic.mixd.ee"===window.location.host&&($="/veeb/stockmann"),s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(K.a,{basename:$,children:Object(i.jsxs)(Q.c,{children:[Object(i.jsx)(Q.a,{path:"/en",children:Object(i.jsx)(G,{lang:"en"})}),Object(i.jsx)(Q.a,{path:"/fi",children:Object(i.jsx)(G,{lang:"fi"})}),Object(i.jsx)(Q.a,{path:"/sv",children:Object(i.jsx)(G,{lang:"sv"})}),Object(i.jsx)(Q.a,{path:"/et",children:Object(i.jsx)(G,{lang:"et"})}),Object(i.jsx)(Q.a,{path:"/lv",children:Object(i.jsx)(G,{lang:"lv"})}),Object(i.jsx)(Q.a,{path:"/",children:Object(i.jsx)(G,{lang:"en"})})]})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ac9a2346.chunk.js.map