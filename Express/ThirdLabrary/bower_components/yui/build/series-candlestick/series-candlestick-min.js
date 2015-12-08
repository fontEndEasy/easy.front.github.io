YUI.add("series-candlestick",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}n.NAME="candlestickSeries",n.ATTRS={type:{value:"candlestick"},graphic:{lazyAdd:!1,setter:function(e){return this.get("rendered")||this.set("rendered",!0),this.set("upcandle",e.addShape({type:"path"})),this.set("downcandle",e.addShape({type:"path"})),this.set("wick",e.addShape({type:"path"})),e}},upcandle:{},downcandle:{},wick:{}},e.extend(n,e.RangeSeries,{_drawMarkers:function(t,n,r,i,s,o,u,a,f){var l=this.get("upcandle"),c=this.get("downcandle"),h,p=this.get("wick"),d=f.wick,v=d.width,m,g,y,b,w,E,S,x,T,N,C=f.padding.left,k,L,A=e.Lang.isNumber;l.set(f.upcandle),c.set(f.downcandle),p.set({fill:d.fill,stroke:d.stroke,shapeRendering:d.shapeRendering}),l.clear(),c.clear(),p.clear();for(L=0;L<o;L+=1)m=Math.round(t[L]+C),E=m-a,S=m+a,g=Math.round(n[L]),y=Math.round(r[L]),b=Math.round(i[L]),w=Math.round(s[L]),k=g>w,x=k?w:g,T=k?g:w,N=T-x,h=k?l:c,h&&A(E)&&A(x)&&A(u)&&A(N)&&h.drawRect(E,x,u,N),A(m)&&A(y)&&A(b)&&p.drawRect(m-v/2,y,v,b-y);l.end(),c.end(),p.end(),p.toBack()},_toggleVisible:function(e){this.get("upcandle").set("visible",e),this.get("downcandle").set("visible",e),this.get("wick").set("visible",e)},destructor:function(){var e=this.get("upcandle"),t=this.get("downcandle"),n=this.get("wick");e&&e.destroy(),t&&t.destroy(),n&&n.destroy()},_getDefaultStyles:function(){var e={upcandle:{shapeRendering:"crispEdges",fill:{color:"#00aa00",alpha:1},stroke:{color:"#000000",alpha:1,weight:0}},downcandle:{shapeRendering:"crispEdges",fill:{color:"#aa0000",alpha:1},stroke:{color:"#000000",alpha:1,weight:0}},wick:{shapeRendering:"crispEdges",width:1,fill:{color:"#000000",alpha:1},stroke:{color:"#000000",alpha:1,weight:0}}};return this._mergeStyles(e,n.superclass._getDefaultStyles())}}),e.CandlestickSeries=n},"@VERSION@",{requires:["series-range"]});
