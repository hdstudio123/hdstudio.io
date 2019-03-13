// Garden Gnome Software - Skin
// Pano2VR 6.0.3/17298
// Filename: Restaurant qalaqi.ggsk
// Generated 2019-03-12T21:15:50

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__rooms_menu_canvas=document.createElement('div');
		el.ggId=" rooms menu canvas";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(214,211,209,0.490196);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 367px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 174px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__rooms_menu_canvas.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__rooms_menu_canvas.onmouseover=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			if (player.transitionsDisabled) {
				me._scrollarea_1.style[domTransition]='none';
			} else {
				me._scrollarea_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._scrollarea_1.ggParameter.rx=0;me._scrollarea_1.ggParameter.ry=0;
			me._scrollarea_1.style[domTransform]=parameterToTransform(me._scrollarea_1.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_2.style[domTransition]='none';
			} else {
				me._svg_2.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_2.ggParameter.rx=0;me._svg_2.ggParameter.ry=0;
			me._svg_2.style[domTransform]=parameterToTransform(me._svg_2.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_4.style[domTransition]='none';
			} else {
				me._svg_4.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_4.ggParameter.rx=0;me._svg_4.ggParameter.ry=0;
			me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_3.style[domTransition]='none';
			} else {
				me._svg_3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_3.ggParameter.rx=0;me._svg_3.ggParameter.ry=0;
			me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=0;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_1.style[domTransition]='none';
			} else {
				me._svg_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_1.ggParameter.rx=0;me._svg_1.ggParameter.ry=0;
			me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
			if (player.transitionsDisabled) {
				me._button_zoom.style[domTransition]='none';
			} else {
				me._button_zoom.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._button_zoom.ggParameter.rx=0;me._button_zoom.ggParameter.ry=0;
			me._button_zoom.style[domTransform]=parameterToTransform(me._button_zoom.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_12.style[domTransition]='none';
			} else {
				me._svg_12.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_12.ggParameter.rx=0;me._svg_12.ggParameter.ry=0;
			me._svg_12.style[domTransform]=parameterToTransform(me._svg_12.ggParameter);
			if (player.transitionsDisabled) {
				me._thumbnail_show_button_show.style[domTransition]='none';
			} else {
				me._thumbnail_show_button_show.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._thumbnail_show_button_show.ggParameter.rx=0;me._thumbnail_show_button_show.ggParameter.ry=0;
			me._thumbnail_show_button_show.style[domTransform]=parameterToTransform(me._thumbnail_show_button_show.ggParameter);
		}
		me.__rooms_menu_canvas.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAEXklEQVR4nO3WQQ3DQADEwE0ZhT+4lkSVk+IZBH56AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg5a5t9+kIAOBZ17bv6QgA4Fmf0wEAwPMMAAAEGQAACDIAABBkAAAgyAAAQJABAIAgAwAAQQYAAIIMAAAEGQAACDIAABBkAAAgyAAAQJABAIAgAwAAQQYAAIIMAAAEGQAACDIAABBkAAAgyAAAQJABAICga9t9OgIAAAAAAAAA'+
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAv/oB7dsBkyfFcV4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 334px;';
		hs+='visibility : inherit;';
		hs+='width : 62px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._image_1);
		el=me._book_a_table=document.createElement('div');
		els=me._book_a_table__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Book a table";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 326px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Book a table";
		el.appendChild(els);
		me._book_a_table.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._book_a_table.onmouseover=function (e) {
			me.elementMouseOver['book_a_table']=true;
		}
		me._book_a_table.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._book_a_table__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._book_a_table.style[domTransition]='none';
			} else {
				me._book_a_table.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._book_a_table.ggParameter.sx=1;me._book_a_table.ggParameter.sy=1;
			me._book_a_table.style[domTransform]=parameterToTransform(me._book_a_table.ggParameter);
			me.elementMouseOver['book_a_table']=false;
		}
		me._book_a_table.ontouchend=function (e) {
			me.elementMouseOver['book_a_table']=false;
		}
		me._book_a_table.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._book_a_table);
		el=me._line_2=document.createElement('div');
		els=me._line_2__img=document.createElement('img');
		els.className='ggskin ggskin_line_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAEXklEQVR4nO3WQQ3DQADEwE0ZhT+4lkSVk+IZBH56AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg5a5t9+kIAOBZ17bv6QgA4Fmf0wEAwPMMAAAEGQAACDIAABBkAAAgyAAAQJABAIAgAwAAQQYAAIIMAAAEGQAACDIAABBkAAAgyAAAQJABAIAgAwAAQQYAAIIMAAAEGQAACDIAABBkAAAgyAAAQJABAICga9t9OgIAAAAAAAAA'+
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAv/oB7dsBkyfFcV4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="line 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 334px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._line_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line_2.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._line_2);
		el=me._contact=document.createElement('div');
		els=me._contact__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Contact";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 17px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 327px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 58px;';
		hs+='height: 17px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Contact";
		el.appendChild(els);
		me._contact.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/pg\/restaurantqalaqi\/about\/?ref=page_internal","_blank");
		}
		me._contact.onmouseover=function (e) {
			me.elementMouseOver['contact']=true;
		}
		me._contact.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._contact__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._contact.style[domTransition]='none';
			} else {
				me._contact.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._contact.ggParameter.sx=1;me._contact.ggParameter.sy=1;
			me._contact.style[domTransform]=parameterToTransform(me._contact.ggParameter);
			me.elementMouseOver['contact']=false;
		}
		me._contact.ontouchend=function (e) {
			me.elementMouseOver['contact']=false;
		}
		me._contact.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._contact);
		el=me._entrance=document.createElement('div');
		els=me._entrance__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Entrance";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Entrance";
		el.appendChild(els);
		me._entrance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entrance.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._entrance.onmouseover=function (e) {
			me.elementMouseOver['entrance']=true;
		}
		me._entrance.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._entrance__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._entrance.style[domTransition]='none';
			} else {
				me._entrance.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._entrance.ggParameter.sx=1;me._entrance.ggParameter.sy=1;
			me._entrance.style[domTransform]=parameterToTransform(me._entrance.ggParameter);
			me.elementMouseOver['entrance']=false;
		}
		me._entrance.ontouchend=function (e) {
			me.elementMouseOver['entrance']=false;
		}
		me._entrance.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._entrance);
		el=me._lobby=document.createElement('div');
		els=me._lobby__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Lobby";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lobby";
		el.appendChild(els);
		me._lobby.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lobby.onclick=function (e) {
			player.openNext("{node2}","50\/0\/0");
		}
		me._lobby.onmouseover=function (e) {
			me.elementMouseOver['lobby']=true;
		}
		me._lobby.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._lobby__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._lobby.style[domTransition]='none';
			} else {
				me._lobby.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._lobby.ggParameter.sx=1;me._lobby.ggParameter.sy=1;
			me._lobby.style[domTransform]=parameterToTransform(me._lobby.ggParameter);
			me.elementMouseOver['lobby']=false;
		}
		me._lobby.ontouchend=function (e) {
			me.elementMouseOver['lobby']=false;
		}
		me._lobby.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._lobby);
		el=me._apartment=document.createElement('div');
		els=me._apartment__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Apartment";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Apartment";
		el.appendChild(els);
		me._apartment.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._apartment.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._apartment.onmouseover=function (e) {
			me.elementMouseOver['apartment']=true;
		}
		me._apartment.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._apartment__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._apartment.style[domTransition]='none';
			} else {
				me._apartment.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._apartment.ggParameter.sx=1;me._apartment.ggParameter.sy=1;
			me._apartment.style[domTransform]=parameterToTransform(me._apartment.ggParameter);
			me.elementMouseOver['apartment']=false;
		}
		me._apartment.ontouchend=function (e) {
			me.elementMouseOver['apartment']=false;
		}
		me._apartment.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._apartment);
		el=me._mirror_hall=document.createElement('div');
		els=me._mirror_hall__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Mirror hall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 93px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Mirror hall";
		el.appendChild(els);
		me._mirror_hall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mirror_hall.onclick=function (e) {
			player.openNext("{node5}","-60\/0\/0");
		}
		me._mirror_hall.onmouseover=function (e) {
			me.elementMouseOver['mirror_hall']=true;
		}
		me._mirror_hall.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._mirror_hall__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._mirror_hall.style[domTransition]='none';
			} else {
				me._mirror_hall.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._mirror_hall.ggParameter.sx=1;me._mirror_hall.ggParameter.sy=1;
			me._mirror_hall.style[domTransform]=parameterToTransform(me._mirror_hall.ggParameter);
			me.elementMouseOver['mirror_hall']=false;
		}
		me._mirror_hall.ontouchend=function (e) {
			me.elementMouseOver['mirror_hall']=false;
		}
		me._mirror_hall.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._mirror_hall);
		el=me._the_bronze_hall=document.createElement('div');
		els=me._the_bronze_hall__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="The Bronze Hall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 124px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="The Bronze Hall";
		el.appendChild(els);
		me._the_bronze_hall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._the_bronze_hall.onclick=function (e) {
			player.openNext("{node19}","-90\/0\/0");
		}
		me._the_bronze_hall.onmouseover=function (e) {
			me.elementMouseOver['the_bronze_hall']=true;
		}
		me._the_bronze_hall.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._the_bronze_hall__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._the_bronze_hall.style[domTransition]='none';
			} else {
				me._the_bronze_hall.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._the_bronze_hall.ggParameter.sx=1;me._the_bronze_hall.ggParameter.sy=1;
			me._the_bronze_hall.style[domTransform]=parameterToTransform(me._the_bronze_hall.ggParameter);
			me.elementMouseOver['the_bronze_hall']=false;
		}
		me._the_bronze_hall.ontouchend=function (e) {
			me.elementMouseOver['the_bronze_hall']=false;
		}
		me._the_bronze_hall.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._the_bronze_hall);
		el=me._terrace=document.createElement('div');
		els=me._terrace__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Terrace";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 153px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Terrace";
		el.appendChild(els);
		me._terrace.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._terrace.onclick=function (e) {
			player.openNext("{node13}","50\/0\/0");
		}
		me._terrace.onmouseover=function (e) {
			me.elementMouseOver['terrace']=true;
		}
		me._terrace.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._terrace__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._terrace.style[domTransition]='none';
			} else {
				me._terrace.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._terrace.ggParameter.sx=1;me._terrace.ggParameter.sy=1;
			me._terrace.style[domTransform]=parameterToTransform(me._terrace.ggParameter);
			me.elementMouseOver['terrace']=false;
		}
		me._terrace.ontouchend=function (e) {
			me.elementMouseOver['terrace']=false;
		}
		me._terrace.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._terrace);
		el=me._library=document.createElement('div');
		els=me._library__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Library";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 183px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Library";
		el.appendChild(els);
		me._library.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._library.onclick=function (e) {
			player.openNext("{node14}","");
		}
		me._library.onmouseover=function (e) {
			me.elementMouseOver['library']=true;
		}
		me._library.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._library__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._library.style[domTransition]='none';
			} else {
				me._library.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._library.ggParameter.sx=1;me._library.ggParameter.sy=1;
			me._library.style[domTransform]=parameterToTransform(me._library.ggParameter);
			me.elementMouseOver['library']=false;
		}
		me._library.ontouchend=function (e) {
			me.elementMouseOver['library']=false;
		}
		me._library.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._library);
		el=me._lodge=document.createElement('div');
		els=me._lodge__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Lodge";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lodge";
		el.appendChild(els);
		me._lodge.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lodge.onclick=function (e) {
			player.openNext("{node15}","60\/-20\/0");
		}
		me._lodge.onmouseover=function (e) {
			me.elementMouseOver['lodge']=true;
		}
		me._lodge.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._lodge__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._lodge.style[domTransition]='none';
			} else {
				me._lodge.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._lodge.ggParameter.sx=1;me._lodge.ggParameter.sy=1;
			me._lodge.style[domTransform]=parameterToTransform(me._lodge.ggParameter);
			me.elementMouseOver['lodge']=false;
		}
		me._lodge.ontouchend=function (e) {
			me.elementMouseOver['lodge']=false;
		}
		me._lodge.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._lodge);
		el=me._balcony=document.createElement('div');
		els=me._balcony__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Balcony";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Balcony";
		el.appendChild(els);
		me._balcony.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._balcony.onclick=function (e) {
			player.openNext("{node17}","200\/-15\/0");
		}
		me._balcony.onmouseover=function (e) {
			me.elementMouseOver['balcony']=true;
		}
		me._balcony.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._balcony__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._balcony.style[domTransition]='none';
			} else {
				me._balcony.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._balcony.ggParameter.sx=1;me._balcony.ggParameter.sy=1;
			me._balcony.style[domTransform]=parameterToTransform(me._balcony.ggParameter);
			me.elementMouseOver['balcony']=false;
		}
		me._balcony.ontouchend=function (e) {
			me.elementMouseOver['balcony']=false;
		}
		me._balcony.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._balcony);
		el=me._wardrobe=document.createElement('div');
		els=me._wardrobe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Wardrobe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 267px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Wardrobe";
		el.appendChild(els);
		me._wardrobe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._wardrobe.onclick=function (e) {
			player.openNext("{node9}","-90\/0\/0");
		}
		me._wardrobe.onmouseover=function (e) {
			me.elementMouseOver['wardrobe']=true;
		}
		me._wardrobe.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._wardrobe__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._wardrobe.style[domTransition]='none';
			} else {
				me._wardrobe.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._wardrobe.ggParameter.sx=1;me._wardrobe.ggParameter.sy=1;
			me._wardrobe.style[domTransform]=parameterToTransform(me._wardrobe.ggParameter);
			me.elementMouseOver['wardrobe']=false;
		}
		me._wardrobe.ontouchend=function (e) {
			me.elementMouseOver['wardrobe']=false;
		}
		me._wardrobe.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._wardrobe);
		el=me._yard=document.createElement('div');
		els=me._yard__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Yard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 294px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Yard";
		el.appendChild(els);
		me._yard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._yard.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._yard.onmouseover=function (e) {
			me.elementMouseOver['yard']=true;
		}
		me._yard.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._yard__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._yard.style[domTransition]='none';
			} else {
				me._yard.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._yard.ggParameter.sx=1;me._yard.ggParameter.sy=1;
			me._yard.style[domTransform]=parameterToTransform(me._yard.ggParameter);
			me.elementMouseOver['yard']=false;
		}
		me._yard.ontouchend=function (e) {
			me.elementMouseOver['yard']=false;
		}
		me._yard.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._yard);
		el=me._close_rooms_menu=document.createElement('div');
		els=me._close_rooms_menu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1Ljk0Myw2LjA1OGMtOC4wNzctOC4wNzctMjEuMTcyLTguMDc3LTI5LjI0OSwwTDYuMDU4LDQ3Ni42OTNjLTguMDc3LDguMDc3LTguMDc3LDIxLjE3MiwwLDI5LjI0OQ0KCQkJQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNg0KCQkJQzUxNC4wMTksMjcuMjMsNTE0LjAxOSwxNC4xMzUsNTA1Ljk0Myw2LjA1OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwz'+
			'NS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNg0KCQkJYzQuMDM4LDQuMDM5LDkuMzMyLDYuMDU4LDE0LjYyNSw2LjA1OGM1LjI5MywwLDEwLjU4Ny0yLjAxOSwxNC42MjQtNi4wNTdDNTE0LjAxOCw0OTcuODY2LDUxNC4wMTgsNDg0Ljc3MSw1MDUuOTQyLDQ3Ni42OTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg'+
			'0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';
		me._close_rooms_menu__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;close_rooms_menu;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Close rooms menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : 146px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_rooms_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_rooms_menu.onclick=function (e) {
			me.__rooms_menu_canvas.style[domTransition]='none';
			me.__rooms_menu_canvas.style.visibility='hidden';
			me.__rooms_menu_canvas.ggVisible=false;
			if (player.transitionsDisabled) {
				me.__rooms_menu.style[domTransition]='none';
			} else {
				me.__rooms_menu.style[domTransition]='all 279ms ease-out 0ms';
			}
			me.__rooms_menu.ggParameter.sx=1;me.__rooms_menu.ggParameter.sy=1;
			me.__rooms_menu.style[domTransform]=parameterToTransform(me.__rooms_menu.ggParameter);
			me.__rooms_menu.style[domTransition]='none';
			me.__rooms_menu.style.visibility=(Number(me.__rooms_menu.style.opacity)>0||!me.__rooms_menu.style.opacity)?'inherit':'hidden';
			me.__rooms_menu.ggVisible=true;
		}
		me._close_rooms_menu.onmouseover=function (e) {
			var flag=me._close_rooms_menu.ggAngleActive;
			if (player.transitionsDisabled) {
				me._close_rooms_menu.style[domTransition]='none';
			} else {
				me._close_rooms_menu.style[domTransition]='all 300ms ease-out 0ms';
			}
			if (flag) {
				me._close_rooms_menu.ggParameter.a=0;
				me._close_rooms_menu.style[domTransform]=parameterToTransform(me._close_rooms_menu.ggParameter);
			} else {
				me._close_rooms_menu.ggParameter.a="180.0000";
				me._close_rooms_menu.style[domTransform]=parameterToTransform(me._close_rooms_menu.ggParameter);
			}
			me._close_rooms_menu.ggAngleActive=!flag;
		}
		me._close_rooms_menu.onmouseout=function (e) {
			var flag=me._close_rooms_menu.ggAngleActive;
			if (player.transitionsDisabled) {
				me._close_rooms_menu.style[domTransition]='none';
			} else {
				me._close_rooms_menu.style[domTransition]='all 300ms ease-out 0ms';
			}
			if (flag) {
				me._close_rooms_menu.ggParameter.a=0;
				me._close_rooms_menu.style[domTransform]=parameterToTransform(me._close_rooms_menu.ggParameter);
			} else {
				me._close_rooms_menu.ggParameter.a="0.0000";
				me._close_rooms_menu.style[domTransform]=parameterToTransform(me._close_rooms_menu.ggParameter);
			}
			me._close_rooms_menu.ggAngleActive=!flag;
		}
		me._close_rooms_menu.ggUpdatePosition=function (useTransition) {
		}
		me.__rooms_menu_canvas.appendChild(me._close_rooms_menu);
		me.divSkin.appendChild(me.__rooms_menu_canvas);
		el=me.__rooms_menu=document.createElement('div');
		els=me.__rooms_menu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OTEuMzE4LDIzNS4zMThIMjAuNjgyQzkuMjYsMjM1LjMxOCwwLDI0NC'+
			'41NzcsMCwyNTZzOS4yNiwyMC42ODIsMjAuNjgyLDIwLjY4Mmg0NzAuNjM2ICAgIGMxMS40MjMsMCwyMC42ODItOS4yNTksMjAuNjgyLTIwLjY4MkM1MTIsMjQ0LjU3OCw1MDIuNzQxLDIzNS4zMTgsNDkxLjMxOCwyMzUuMzE4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0Y0RUNFQyIgZmlsbD0iI0Y5RjlGOSIvPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkxLjMxOCw3OC40MzlIMjAuNjgyQzkuMjYsNzguNDM5LDAsODcuNjk5LDAsOTkuMTIxYzAsMTEuNDIyLDkuMjYsMjAuNjgyLDIwLjY4MiwyMC42ODJoNDcw'+
			'LjYzNiAgICBjMTEuNDIzLDAsMjAuNjgyLTkuMjYsMjAuNjgyLTIwLjY4MkM1MTIsODcuNjk5LDUwMi43NDEsNzguNDM5LDQ5MS4zMTgsNzguNDM5eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0Y0RUNFQyIgZmlsbD0iI0Y5RjlGOSIvPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkxLjMxOCwzOTIuMTk3SDIwLjY4MkM5LjI2LDM5Mi4xOTcsMCw0MDEuNDU2LDAsNDEyLjg3OXM5LjI2LDIwLjY4MiwyMC42ODIsMjAuNjgyaDQ3MC42MzYgICAgYzExLjQyMywwLDIwLjY4Mi05LjI1OSwyMC42ODItMjAuNjgyUzUwMi'+
			'43NDEsMzkyLjE5Nyw0OTEuMzE4LDM5Mi4xOTd6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRjRFQ0VDIiBmaWxsPSIjRjlGOUY5Ii8+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPgo=';
		me.__rooms_menu__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;_rooms_menu;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId=" rooms menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__rooms_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__rooms_menu.onclick=function (e) {
			me.__rooms_menu_canvas.style[domTransition]='none';
			me.__rooms_menu_canvas.style.visibility=(Number(me.__rooms_menu_canvas.style.opacity)>0||!me.__rooms_menu_canvas.style.opacity)?'inherit':'hidden';
			me.__rooms_menu_canvas.ggVisible=true;
			me.__rooms_menu.style[domTransition]='none';
			me.__rooms_menu.style.visibility='hidden';
			me.__rooms_menu.ggVisible=false;
		}
		me.__rooms_menu.onmouseover=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			if (player.transitionsDisabled) {
				me._scrollarea_1.style[domTransition]='none';
			} else {
				me._scrollarea_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._scrollarea_1.ggParameter.rx=0;me._scrollarea_1.ggParameter.ry=0;
			me._scrollarea_1.style[domTransform]=parameterToTransform(me._scrollarea_1.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_2.style[domTransition]='none';
			} else {
				me._svg_2.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_2.ggParameter.rx=0;me._svg_2.ggParameter.ry=0;
			me._svg_2.style[domTransform]=parameterToTransform(me._svg_2.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_4.style[domTransition]='none';
			} else {
				me._svg_4.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_4.ggParameter.rx=0;me._svg_4.ggParameter.ry=0;
			me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_3.style[domTransition]='none';
			} else {
				me._svg_3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_3.ggParameter.rx=0;me._svg_3.ggParameter.ry=0;
			me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=0;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_1.style[domTransition]='none';
			} else {
				me._svg_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_1.ggParameter.rx=0;me._svg_1.ggParameter.ry=0;
			me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
			if (player.transitionsDisabled) {
				me._button_zoom.style[domTransition]='none';
			} else {
				me._button_zoom.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._button_zoom.ggParameter.rx=0;me._button_zoom.ggParameter.ry=0;
			me._button_zoom.style[domTransform]=parameterToTransform(me._button_zoom.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_12.style[domTransition]='none';
			} else {
				me._svg_12.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_12.ggParameter.rx=0;me._svg_12.ggParameter.ry=0;
			me._svg_12.style[domTransform]=parameterToTransform(me._svg_12.ggParameter);
			if (player.transitionsDisabled) {
				me.__rooms_menu.style[domTransition]='none';
			} else {
				me.__rooms_menu.style[domTransition]='all 100ms ease-out 0ms';
			}
			me.__rooms_menu.ggParameter.sx=1.1;me.__rooms_menu.ggParameter.sy=1.1;
			me.__rooms_menu.style[domTransform]=parameterToTransform(me.__rooms_menu.ggParameter);
			if (player.transitionsDisabled) {
				me._thumbnail_show_button_show.style[domTransition]='none';
			} else {
				me._thumbnail_show_button_show.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._thumbnail_show_button_show.ggParameter.rx=0;me._thumbnail_show_button_show.ggParameter.ry=0;
			me._thumbnail_show_button_show.style[domTransform]=parameterToTransform(me._thumbnail_show_button_show.ggParameter);
		}
		me.__rooms_menu.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me.__rooms_menu.style[domTransition]='none';
			} else {
				me.__rooms_menu.style[domTransition]='all 100ms ease-out 0ms';
			}
			me.__rooms_menu.ggParameter.sx=1;me.__rooms_menu.ggParameter.sy=1;
			me.__rooms_menu.style[domTransform]=parameterToTransform(me.__rooms_menu.ggParameter);
		}
		me.__rooms_menu.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__rooms_menu);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 1566px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.clientWidth - me._scrollarea_1__horScrollFg.clientWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.clientWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.clientWidth - me._scrollarea_1__horScrollFg.clientWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.clientWidth - me._scrollarea_1__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.clientWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.clientHeight - me._scrollarea_1__vertScrollFg.clientHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.clientHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.clientHeight - me._scrollarea_1__vertScrollFg.clientHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.clientHeight - me._scrollarea_1__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.clientHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t[0].clientX;
			me._scrollarea_1.ggDragLastY = t[0].clientY;
			me._scrollarea_1__content.ontouchend = function() {
				me._scrollarea_1__content.ontouchend = null;
				me._scrollarea_1__content.ontouchmove = null;
			}
			me._scrollarea_1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_1.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragLastX = t[0].clientX;
				me._scrollarea_1.ggDragLastY = t[0].clientY;
				me._scrollarea_1.ggScrollByX(-diffX);
				me._scrollarea_1.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 3000px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3000px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragLastX = t[0].clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(20 * wheelDelta);
		});
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 65px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 65px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragLastY = t[0].clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(18,22,33,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='bottom : -14px;';
		hs+='height : 65px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 3000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var clientWidthWithScale = this.getBoundingClientRect().width;
				var clientHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > clientWidthWithScale) {
					me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggHorScrollVisible = true;
				} else {
					me._scrollarea_1__horScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__horScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggHorScrollVisible = false;
				}
				if ((me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggVertScrollVisible = true;
					if (!me._scrollarea_1.ggHorScrollVisible && (contentWidth > clientWidthWithScale - me._scrollarea_1_vertScrollBg.getBoundingClientRect().width)) {
						me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
						me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
						me._scrollarea_1.ggHorScrollVisible = true;
					}
				} else {
					me._scrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1.ggHorScrollVisible) {
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 15;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1_horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = me._scrollarea_1.ggAvailableWidthWithScale / contentWidth;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.clientWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.clientWidth - me._scrollarea_1__horScrollFg.clientWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._scrollarea_1.ggVertScrollVisible) {
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 15;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1_vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = me._scrollarea_1.ggAvailableHeightWithScale / contentHeight;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.clientHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.clientHeight - me._scrollarea_1__vertScrollFg.clientHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTQwLjQsMTIxLjNjLTAuOCwwLjgtMS44LDEuMi0yLjksMS4ycy0yLjEtMC40LTIuOS0xLjJjLTEuNi0xLjYtMS42LTQuMiAwLTUuOGw1MS01MS01MS01MWMtMS42LT'+
			'EuNi0xLjYtNC4yIDAtNS44IDEuNi0xLjYgNC4yLTEuNiA1LjgsMGw1My45LDUzLjljMS42LDEuNiAxLjYsNC4yIDAsNS44bC01My45LDUzLjl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgo8L3N2Zz4K';
		me._button_image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_right;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTQwLjQsMTIxLjNjLTAuOCwwLjgtMS44LDEuMi0yLjksMS4ycy0yLjEtMC40LTIuOS0xLjJjLTEuNi0xLjYtMS42LTQuMiAwLTUuOGw1MS01MS01MS01MWMtMS42LT'+
			'EuNi0xLjYtNC4yIDAtNS44IDEuNi0xLjYgNC4yLTEuNiA1LjgsMGw1My45LDUzLjljMS42LDEuNiAxLjYsNC4yIDAsNS44bC01My45LDUzLjl6IiBmaWxsPSIjYzQ1OTBjIi8+CiAgPC9nPgo8L3N2Zz4K';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_right;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 1541px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		me._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._scrollarea_1__content.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNi'+
			'AxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_left;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNi'+
			'AxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiIGZpbGw9IiNjNDU5MGMiLz4KICA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_left;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 1477px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		me._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._scrollarea_1__content.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTEyMS4zLDM0LjZjLTEuNi0xLjYtNC4yLTEuNi01LjgsMGwtNTEsNTEuMS01MS4xLTUxLjFjLTEuNi0xLjYtNC4yLTEuNi01LjgsMC0xLjYsMS42LTEuNiw0LjIgMC'+
			'w1LjhsNTMuOSw1My45YzAuOCwwLjggMS44LDEuMiAyLjksMS4yIDEsMCAyLjEtMC40IDIuOS0xLjJsNTMuOS01My45YzEuNy0xLjYgMS43LTQuMiAwLjEtNS44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KPC9zdmc+Cg==';
		me._button_image_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_down;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTEyMS4zLDM0LjZjLTEuNi0xLjYtNC4yLTEuNi01LjgsMGwtNTEsNTEuMS01MS4xLTUxLjFjLTEuNi0xLjYtNC4yLTEuNi01LjgsMC0xLjYsMS42LTEuNiw0LjIgMC'+
			'w1LjhsNTMuOSw1My45YzAuOCwwLjggMS44LDEuMiAyLjksMS4yIDEsMCAyLjEtMC40IDIuOS0xLjJsNTMuOS01My45YzEuNy0xLjYgMS43LTQuMiAwLjEtNS44eiIgZmlsbD0iI2M0NTkwYyIvPgogIDwvZz4KPC9zdmc+Cg==';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_down;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 1509px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		me._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._scrollarea_1__content.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTEycHgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDY0IDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCI+CiAgPGc+CiAgICA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNMy4zNTIsNDguMjk2bDI4LjU2LTI4LjMyOGwyOC41OCwyOC4zNDdjMC4zOTcsMC4zOTQsMC45MTcsMC41OSwxLjQzNiwwLjU5YzAuNTIsMCwxLjA0LTAuMTk2LDEuNDM2LTAuNTkgICBjMC43OTMtMC43ODcsMC43OTMtMi4wNjIsMC0yLjg0OWwtMjkuOTgtMjkuNzM1Yy0wLjItMC4yLTAuNDk0LTAuMzc1LTAuNzU3LTAuNDc1Yy0wLjc1LTAuMjgyLTEuNTk3LTAuMTA3LTIuMTY2LDAuNDU2ICAgTDAuNDc5LDQ1LjQ0N2MtMC43OTMsMC43ODctMC43OTMsMi4wNjIsMCwyLjg0OUMxLjI3Myw0OS4wODIsMi41NTgsNDkuMDgyLDMuMzUyLDQ4LjI5NnoiLz4KICA8L2c+Cjwv'+
			'c3ZnPgo=';
		me._button_image_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_up;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTEycHgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDY0IDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCI+CiAgPGc+CiAgICA8cGF0aCBmaW'+
			'xsPSIjYzQ1OTBjIiBkPSJNMy4zNTIsNDguMjk2bDI4LjU2LTI4LjMyOGwyOC41OCwyOC4zNDdjMC4zOTcsMC4zOTQsMC45MTcsMC41OSwxLjQzNiwwLjU5YzAuNTIsMCwxLjA0LTAuMTk2LDEuNDM2LTAuNTkgICBjMC43OTMtMC43ODcsMC43OTMtMi4wNjIsMC0yLjg0OWwtMjkuOTgtMjkuNzM1Yy0wLjItMC4yLTAuNDk0LTAuMzc1LTAuNzU3LTAuNDc1Yy0wLjc1LTAuMjgyLTEuNTk3LTAuMTA3LTIuMTY2LDAuNDU2ICAgTDAuNDc5LDQ1LjQ0N2MtMC43OTMsMC43ODctMC43OTMsMi4wNjIsMCwyLjg0OUMxLjI3Myw0OS4wODIsMi41NTgsNDkuMDgyLDMuMzUyLDQ4LjI5NnoiLz4KICA8L2c+Cjwv'+
			'c3ZnPgo=';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_up;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 1509px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		me._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._scrollarea_1__content.appendChild(me._button_image_up);
		me.divSkin.appendChild(me._scrollarea_1);
		el=me._webscreentint=document.createElement('div');
		el.ggId="WebScreenTint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._webscreentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webscreentint.onclick=function (e) {
			me._webpagedisplay.ggText="";
			me._webpagedisplay.ggTextDiv.innerHTML=me._webpagedisplay.ggText;
			if (me._webpagedisplay.ggUpdateText) {
				me._webpagedisplay.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._webpagedisplay.ggUpdatePosition) {
				me._webpagedisplay.ggUpdatePosition();
			}
			me._webpagedisplay.ggTextDiv.scrollTop = 0;
			me._webpagedisplay.style[domTransition]='none';
			me._webpagedisplay.style.visibility='hidden';
			me._webpagedisplay.ggVisible=false;
			me._webscreentint.style[domTransition]='none';
			me._webscreentint.style.visibility='hidden';
			me._webscreentint.ggVisible=false;
			me._webpageloading.style[domTransition]='none';
			me._webpageloading.style.visibility='hidden';
			me._webpageloading.ggVisible=false;
			me._webscreentint.style[domTransition]='none';
			me._webscreentint.style.visibility='hidden';
			me._webscreentint.ggVisible=false;
			me._webpageclose.style[domTransition]='none';
			me._webpageclose.style.visibility='hidden';
			me._webpageclose.ggVisible=false;
		}
		me._webscreentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webscreentint);
		el=me._webpageloading=document.createElement('div');
		els=me._webpageloading__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageLoading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>Please wait, map loading...<\/b>";
		el.appendChild(els);
		me._webpageloading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageloading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((118-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._webpageloading);
		el=me._webpagedisplay=document.createElement('div');
		els=me._webpagedisplay__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageDisplay";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 85%;';
		hs+='left : 4.84%;';
		hs+='position : absolute;';
		hs+='top : 7.21%;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._webpagedisplay.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpagedisplay.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webpagedisplay);
		el=me._webpageclose=document.createElement('div');
		els=me._webpageclose__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyNC41MTIgMjI0LjUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjI0LjUxMiAyMjQuNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KCTxwb2x5Z29uIHBvaW50cz0iMjI0LjUwNyw2Ljk5NyAyMTcuNTIxLDAgMT'+
			'EyLjI1NiwxMDUuMjU4IDYuOTk4LDAgMC4wMDUsNi45OTcgMTA1LjI2MywxMTIuMjU0ICAgIDAuMDA1LDIxNy41MTIgNi45OTgsMjI0LjUxMiAxMTIuMjU2LDExOS4yNCAyMTcuNTIxLDIyNC41MTIgMjI0LjUwNywyMTcuNTEyIDExOS4yNDksMTEyLjI1NCAgIiBkYXRhLW9yaWdpbmFsPSIjMDEwMDAyIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkFGQUZCIiBmaWxsPSIjRkNGQ0ZDIi8+CjwvZz48L2c+IDwvc3ZnPgo=';
		me._webpageclose__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;webpageclose;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._webpageclose__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyNC41MTIgMjI0LjUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjI0LjUxMiAyMjQuNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KCTxwb2x5Z29uIHBvaW50cz0iMjI0LjUwNyw2Ljk5NyAyMTcuNTIxLDAgMT'+
			'EyLjI1NiwxMDUuMjU4IDYuOTk4LDAgMC4wMDUsNi45OTcgMTA1LjI2MywxMTIuMjU0ICAgIDAuMDA1LDIxNy41MTIgNi45OTgsMjI0LjUxMiAxMTIuMjU2LDExOS4yNCAyMTcuNTIxLDIyNC41MTIgMjI0LjUwNywyMTcuNTEyIDExOS4yNDksMTEyLjI1NCAgIiBkYXRhLW9yaWdpbmFsPSIjMDEwMDAyIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkFGQUZCIiBmaWxsPSIjRkNGQ0ZDIi8+CjwvZz48L2c+IDwvc3ZnPgo=';
		me._webpageclose__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;webpageclose;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="WebPageClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 14px;';
		hs+='top : 14px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._webpageclose.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageclose.onclick=function (e) {
			me._webpagedisplay.ggText="";
			me._webpagedisplay.ggTextDiv.innerHTML=me._webpagedisplay.ggText;
			if (me._webpagedisplay.ggUpdateText) {
				me._webpagedisplay.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._webpagedisplay.ggUpdatePosition) {
				me._webpagedisplay.ggUpdatePosition();
			}
			me._webpagedisplay.ggTextDiv.scrollTop = 0;
			me._webpagedisplay.style[domTransition]='none';
			me._webpagedisplay.style.visibility='hidden';
			me._webpagedisplay.ggVisible=false;
			me._webscreentint.style[domTransition]='none';
			me._webscreentint.style.visibility='hidden';
			me._webscreentint.ggVisible=false;
			me._webpageloading.style[domTransition]='none';
			me._webpageloading.style.visibility='hidden';
			me._webpageloading.ggVisible=false;
			me._webpageclose.style[domTransition]='none';
			me._webpageclose.style.visibility='hidden';
			me._webpageclose.ggVisible=false;
		}
		me._webpageclose.onmouseover=function (e) {
			var flag=me._webpageclose.ggAngleActive;
			if (player.transitionsDisabled) {
				me._webpageclose.style[domTransition]='none';
			} else {
				me._webpageclose.style[domTransition]='all 300ms ease-out 0ms';
			}
			if (flag) {
				me._webpageclose.ggParameter.a=0;
				me._webpageclose.style[domTransform]=parameterToTransform(me._webpageclose.ggParameter);
			} else {
				me._webpageclose.ggParameter.a="180.0000";
				me._webpageclose.style[domTransform]=parameterToTransform(me._webpageclose.ggParameter);
			}
			me._webpageclose.ggAngleActive=!flag;
			me._webpageclose__img.style.visibility='hidden';
			me._webpageclose__imgo.style.visibility='inherit';
		}
		me._webpageclose.onmouseout=function (e) {
			var flag=me._webpageclose.ggAngleActive;
			if (player.transitionsDisabled) {
				me._webpageclose.style[domTransition]='none';
			} else {
				me._webpageclose.style[domTransition]='all 300ms ease-out 0ms';
			}
			if (flag) {
				me._webpageclose.ggParameter.a=0;
				me._webpageclose.style[domTransform]=parameterToTransform(me._webpageclose.ggParameter);
			} else {
				me._webpageclose.ggParameter.a="0.0000";
				me._webpageclose.style[domTransform]=parameterToTransform(me._webpageclose.ggParameter);
			}
			me._webpageclose.ggAngleActive=!flag;
			me._webpageclose__img.style.visibility='inherit';
			me._webpageclose__imgo.style.visibility='hidden';
		}
		me._webpageclose.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webpageclose);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggDx=-38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 19px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0NTUgNDU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUgNDU1OyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHJlY3QgeT0iMjEyLjUiIHdpZHRoPSI0NTUiIGhlaWdodD0iMzAiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomout;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0NTUgNDU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUgNDU1OyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHJlY3QgeT0iMjEyLjUiIHdpZHRoPSI0NTUiIGhlaWdodD0iMzAiIGZpbGw9IiNjNDU5MGMiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomout;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggDx=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -5px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icH'+
			'Jlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+Cjxwb2x5Z29uIHBvaW50cz0iNDIsMjAgMjIsMjAgMjIsMCAyMCwwIDIwLDIwIDAsMjAgMCwyMiAyMCwyMiAyMCw0MiAyMiw0MiAyMiwyMiA0MiwyMiAiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomin;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icH'+
			'Jlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+Cjxwb2x5Z29uIHBvaW50cz0iNDIsMjAgMjIsMjAgMjIsMCAyMCwwIDIwLDIwIDAsMjAgMCwyMiAyMCwyMiAyMCw0MiAyMiw0MiAyMiwyMiA0MiwyMiAiIGZpbGw9IiNjNDU5MGMiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomin;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggDx=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -5px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_zoom.appendChild(me._zoomin);
		me.divSkin.appendChild(me._button_zoom);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxLjk5OSA0MS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxLjk5OSA0MS45OT'+
			'k7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMzYuMDY4LDIwLjE3NmwtMjktMjBDNi43NjEtMC4wMzUsNi4zNjMtMC4wNTcsNi4wMzUsMC4xMTRDNS43MDYsMC4yODcsNS41LDAuNjI3LDUuNSwwLjk5OXY0MCAgYzAsMC4zNzIsMC4yMDYsMC43MTMsMC41MzUsMC44ODZjMC4xNDYsMC4wNzYsMC4zMDYsMC4xMTQsMC40NjUsMC4xMTRjMC4xOTksMCwwLjM5Ny0wLjA2LDAuNTY4LTAuMTc3bDI5LTIwICBjMC4yNzEtMC4xODcsMC40MzItMC40OTQsMC40MzItMC44MjNTMzYuMzM4LDIwLjM2MywzNi4wNjgsMjAuMTc2eiIgZmlsbD0i'+
			'I0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxLjk5OSA0MS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxLjk5OSA0MS45OT'+
			'k7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMzYuMDY4LDIwLjE3NmwtMjktMjBDNi43NjEtMC4wMzUsNi4zNjMtMC4wNTcsNi4wMzUsMC4xMTRDNS43MDYsMC4yODcsNS41LDAuNjI3LDUuNSwwLjk5OXY0MCAgYzAsMC4zNzIsMC4yMDYsMC43MTMsMC41MzUsMC44ODZjMC4xNDYsMC4wNzYsMC4zMDYsMC4xMTQsMC40NjUsMC4xMTRjMC4xOTksMCwwLjM5Ny0wLjA2LDAuNTY4LTAuMTc3bDI5LTIwICBjMC4yNzEtMC4xODcsMC40MzItMC40OTQsMC40MzItMC44MjNTMzYuMzM4LDIwLjM2MywzNi4wNjgsMjAuMTc2eiIgZmlsbD0i'+
			'I2M0NTkwYyIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
		me._svg_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_1;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.startAutorotate("0.1","5","1");
			me._svg_12.style[domTransition]='none';
			me._svg_12.style.visibility=(Number(me._svg_12.style.opacity)>0||!me._svg_12.style.opacity)?'inherit':'hidden';
			me._svg_12.ggVisible=true;
			if (player.transitionsDisabled) {
				me._svg_12.style[domTransition]='none';
			} else {
				me._svg_12.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._svg_12.ggParameter.sx=1;me._svg_12.ggParameter.sy=1;
			me._svg_12.style[domTransform]=parameterToTransform(me._svg_12.ggParameter);
			me._svg_1.style[domTransition]='none';
			me._svg_1.style.visibility='hidden';
			me._svg_1.ggVisible=false;
		}
		me._svg_1.onmouseover=function (e) {
			me._svg_1__img.style.visibility='hidden';
			me._svg_1__imgo.style.visibility='inherit';
		}
		me._svg_1.onmouseout=function (e) {
			me._svg_1__img.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_1);
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ0IDQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NCA0NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNMTUuNSwwYy0xLjEwMywwLTIsMC44OTctMiwydjQwYzAsMS4xMDMsMC44OTcsMiwyLDJzMi'+
			'0wLjg5NywyLTJWMkMxNy41LDAuODk3LDE2LjYwMywwLDE1LjUsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNDMDc1NDkiIGZpbGw9IiNBQzYwMzQiLz4KCTxwYXRoIGQ9Ik0yOC41LDBjLTEuMTAzLDAtMiwwLjg5Ny0yLDJ2NDBjMCwxLjEwMywwLjg5NywyLDIsMnMyLTAuODk3LDItMlYyQzMwLjUsMC44OTcsMjkuNjAzLDAsMjguNSwweiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0MwNzU0OSIgZmlsbD0iI0FDNjAzNCIvPgo8L2c+PC9nPiA8L3N2Zz4K';
		me._svg_12__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_12;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_12__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ0IDQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NCA0NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNMTUuNSwwYy0xLjEwMywwLTIsMC44OTctMiwydjQwYzAsMS4xMDMsMC44OTcsMiwyLDJzMi'+
			'0wLjg5NywyLTJWMkMxNy41LDAuODk3LDE2LjYwMywwLDE1LjUsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjRjRFRkVDIiBmaWxsPSIjRjlGOEY4Ii8+Cgk8cGF0aCBkPSJNMjguNSwwYy0xLjEwMywwLTIsMC44OTctMiwydjQwYzAsMS4xMDMsMC44OTcsMiwyLDJzMi0wLjg5NywyLTJWMkMzMC41LDAuODk3LDI5LjYwMywwLDI4LjUsMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjRjRFRkVDIiBmaWxsPSIjRjlGOEY4Ii8+CjwvZz48L2c+IDwvc3ZnPgo=';
		me._svg_12__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_12;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_12.onclick=function (e) {
			player.stopAutorotate();
			me._svg_1.style[domTransition]='none';
			me._svg_1.style.visibility=(Number(me._svg_1.style.opacity)>0||!me._svg_1.style.opacity)?'inherit':'hidden';
			me._svg_1.ggVisible=true;
			if (player.transitionsDisabled) {
				me._svg_1.style[domTransition]='none';
			} else {
				me._svg_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._svg_1.ggParameter.sx=1;me._svg_1.ggParameter.sy=1;
			me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
			me._svg_12.style[domTransition]='none';
			me._svg_12.style.visibility='hidden';
			me._svg_12.ggVisible=false;
		}
		me._svg_12.onmouseover=function (e) {
			me._svg_12__img.style.visibility='hidden';
			me._svg_12__imgo.style.visibility='inherit';
		}
		me._svg_12.onmouseout=function (e) {
			me._svg_12__img.style.visibility='inherit';
			me._svg_12__imgo.style.visibility='hidden';
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_12);
		el=me._map=document.createElement('div');
		els=me._map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icH'+
			'Jlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik01MC42ODgsNDguMjIyQzU1LjIzMiw0My4xMDEsNTgsMzYuMzY5LDU4LDI5YzAtNy42NjctMi45OTYtMTQuNjQzLTcuODcyLTE5LjgzNGMwLDAsMC0wLjAwMSwwLTAuMDAxICBjLTAuMDA0LTAuMDA2LTAuMDEtMC4wMDgtMC4wMTMtMC4wMTNjLTUuMDc5LTUuMzk5LTEyLjE5NS04Ljg1NS0yMC4xMS05LjEyNmwtMC4wMDEtMC4wMDFMMjkuNDM5LDAuMDFDMjkuMjkzLDAuMDA1LDI5LjE0NywwLDI5LDAgIHMtMC4yOTMsMC4wMDUtMC40MzksMC4wMWwtMC41NjMsMC4wMTVsLTAuMDAxLDAuMDAxYy03LjkxNSwwLjI3'+
			'MS0xNS4wMzEsMy43MjctMjAuMTEsOS4xMjZjLTAuMDA0LDAuMDA1LTAuMDEsMC4wMDctMC4wMTMsMC4wMTMgIGMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMkMyLjk5NiwxNC4zNTcsMCwyMS4zMzMsMCwyOWMwLDcuMzY5LDIuNzY4LDE0LjEwMSw3LjMxMiwxOS4yMjJjMC4wMDYsMC4wMDksMC4wMDYsMC4wMTksMC4wMTMsMC4wMjggIGMwLjAxOCwwLjAyNSwwLjA0NCwwLjAzNywwLjA2MywwLjA2YzUuMTA2LDUuNzA4LDEyLjQzMiw5LjM4NSwyMC42MDgsOS42NjVsMC4wMDEsMC4wMDFsMC41NjMsMC4wMTVDMjguNzA3LDU3Ljk5NSwyOC44NTMsNTgsMjksNTggIHMwLjI5My0wLjAwNSwwLjQzOS0wLj'+
			'AxbDAuNTYzLTAuMDE1bDAuMDAxLTAuMDAxYzguMTg1LTAuMjgxLDE1LjUxOS0zLjk2NSwyMC42MjUtOS42ODVjMC4wMTMtMC4wMTcsMC4wMzQtMC4wMjIsMC4wNDYtMC4wNCAgQzUwLjY4Miw0OC4yNDEsNTAuNjgyLDQ4LjIzMSw1MC42ODgsNDguMjIyeiBNMi4wMjUsMzBoMTIuMDAzYzAuMTEzLDQuMjM5LDAuOTQxLDguMzU4LDIuNDE1LDEyLjIxNyAgYy0yLjg0NCwxLjAyOS01LjU2MywyLjQwOS04LjExMSw0LjEzMUM0LjU4NSw0MS44OTEsMi4yNTMsMzYuMjEsMi4wMjUsMzB6IE04Ljg3OCwxMS4wMjNjMi40ODgsMS42MTgsNS4xMzcsMi45MTQsNy45LDMuODgyICBDMTUuMDg2LDE5LjAxMiwx'+
			'NC4xNSwyMy40NCwxNC4wMjgsMjhIMi4wMjVDMi4yNjQsMjEuNDkzLDQuODEyLDE1LjU2OCw4Ljg3OCwxMS4wMjN6IE01NS45NzUsMjhINDMuOTcyICBjLTAuMTIyLTQuNTYtMS4wNTgtOC45ODgtMi43NS0xMy4wOTVjMi43NjMtMC45NjgsNS40MTItMi4yNjQsNy45LTMuODgyQzUzLjE4OCwxNS41NjgsNTUuNzM2LDIxLjQ5Myw1NS45NzUsMjh6IE0yOCwxNC45NjMgIGMtMi44OTEtMC4wODItNS43MjktMC41MTMtOC40NzEtMS4yODNDMjEuNTU2LDkuNTIyLDI0LjQxOCw1Ljc2OSwyOCwyLjY0NFYxNC45NjN6IE0yOCwxNi45NjNWMjhIMTYuMDI4ICBjMC4xMjMtNC4zNDgsMS4wMzUtOC41NjUsMi'+
			'42NjYtMTIuNDc1QzIxLjcsMTYuMzk2LDI0LjgyMSwxNi44NzgsMjgsMTYuOTYzeiBNMzAsMTYuOTYzYzMuMTc5LTAuMDg1LDYuMy0wLjU2Niw5LjMwNy0xLjQzOCAgYzEuNjMxLDMuOTEsMi41NDMsOC4xMjcsMi42NjYsMTIuNDc1SDMwVjE2Ljk2M3ogTTMwLDE0Ljk2M1YyLjY0NGMzLjU4MiwzLjEyNSw2LjQ0NCw2Ljg3OCw4LjQ3MSwxMS4wMzYgIEMzNS43MjksMTQuNDUsMzIuODkxLDE0Ljg4MSwzMCwxNC45NjN6IE00MC40MDksMTMuMDcyYy0xLjkyMS00LjAyNS00LjU4Ny03LjY5Mi03Ljg4OC0xMC44MzUgIGM1Ljg1NiwwLjc2NiwxMS4xMjUsMy40MTQsMTUuMTgzLDcuMzE4QzQ1LjQsMTEu'+
			'MDE3LDQyLjk1NiwxMi4xOTMsNDAuNDA5LDEzLjA3MnogTTE3LjU5MSwxMy4wNzIgIGMtMi41NDctMC44NzktNC45OTEtMi4wNTUtNy4yOTQtMy41MTdjNC4wNTctMy45MDQsOS4zMjctNi41NTIsMTUuMTgzLTcuMzE4QzIyLjE3OCw1LjM4LDE5LjUxMiw5LjA0NywxNy41OTEsMTMuMDcyeiBNMTYuMDI4LDMwICBIMjh2MTAuMDM4Yy0zLjMwNywwLjA4OC02LjU0NywwLjYwNC05LjY2MSwxLjU0MUMxNi45MzIsMzcuOTI0LDE2LjE0MSwzNC4wMTksMTYuMDI4LDMweiBNMjgsNDIuMDM4djEzLjMxOCAgYy0zLjgzNC0zLjM0NS02Ljg0LTcuNDA5LTguODg0LTExLjkxN0MyMS45ODMsNDIuNTk0LDI0Lj'+
			'k2MSw0Mi4xMjQsMjgsNDIuMDM4eiBNMzAsNTUuMzU2VjQyLjAzOCAgYzMuMDM5LDAuMDg1LDYuMDE3LDAuNTU2LDguODg0LDEuNEMzNi44NCw0Ny45NDcsMzMuODM0LDUyLjAxMSwzMCw1NS4zNTZ6IE0zMCw0MC4wMzhWMzBoMTEuOTcyICBjLTAuMTEzLDQuMDE5LTAuOTA0LDcuOTI0LTIuMzEyLDExLjU4QzM2LjU0Nyw0MC42NDIsMzMuMzA3LDQwLjEyNiwzMCw0MC4wMzh6IE00My45NzIsMzBoMTIuMDAzICBjLTAuMjI4LDYuMjEtMi41NTksMTEuODkxLTYuMzA3LDE2LjM0OGMtMi41NDgtMS43MjItNS4yNjctMy4xMDItOC4xMTEtNC4xMzFDNDMuMDMyLDM4LjM1OCw0My44NTksMzQuMjM5LDQz'+
			'Ljk3MiwzMHogICBNOS42OTEsNDcuODQ2YzIuMzY2LTEuNTcyLDQuODg1LTIuODM2LDcuNTE3LTMuNzgxYzEuOTQ1LDQuMzYsNC43MzcsOC4zMzMsOC4yNzEsMTEuNjk4QzE5LjMyOCw1NC45NTgsMTMuODIzLDUyLjA3OCw5LjY5MSw0Ny44NDYgIHogTTMyLjUyMSw1NS43NjNjMy41MzQtMy4zNjQsNi4zMjYtNy4zMzcsOC4yNzEtMTEuNjk4YzIuNjMyLDAuOTQ1LDUuMTUsMi4yMDksNy41MTcsMy43ODEgIEM0NC4xNzcsNTIuMDc4LDM4LjY3Miw1NC45NTgsMzIuNTIxLDU1Ljc2M3oiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPG'+
			'c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
		me._map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;map;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icH'+
			'Jlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik01MC42ODgsNDguMjIyQzU1LjIzMiw0My4xMDEsNTgsMzYuMzY5LDU4LDI5YzAtNy42NjctMi45OTYtMTQuNjQzLTcuODcyLTE5LjgzNGMwLDAsMC0wLjAwMSwwLTAuMDAxICBjLTAuMDA0LTAuMDA2LTAuMDEtMC4wMDgtMC4wMTMtMC4wMTNjLTUuMDc5LTUuMzk5LTEyLjE5NS04Ljg1NS0yMC4xMS05LjEyNmwtMC4wMDEtMC4wMDFMMjkuNDM5LDAuMDFDMjkuMjkzLDAuMDA1LDI5LjE0NywwLDI5LDAgIHMtMC4yOTMsMC4wMDUtMC40MzksMC4wMWwtMC41NjMsMC4wMTVsLTAuMDAxLDAuMDAxYy03LjkxNSwwLjI3'+
			'MS0xNS4wMzEsMy43MjctMjAuMTEsOS4xMjZjLTAuMDA0LDAuMDA1LTAuMDEsMC4wMDctMC4wMTMsMC4wMTMgIGMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMkMyLjk5NiwxNC4zNTcsMCwyMS4zMzMsMCwyOWMwLDcuMzY5LDIuNzY4LDE0LjEwMSw3LjMxMiwxOS4yMjJjMC4wMDYsMC4wMDksMC4wMDYsMC4wMTksMC4wMTMsMC4wMjggIGMwLjAxOCwwLjAyNSwwLjA0NCwwLjAzNywwLjA2MywwLjA2YzUuMTA2LDUuNzA4LDEyLjQzMiw5LjM4NSwyMC42MDgsOS42NjVsMC4wMDEsMC4wMDFsMC41NjMsMC4wMTVDMjguNzA3LDU3Ljk5NSwyOC44NTMsNTgsMjksNTggIHMwLjI5My0wLjAwNSwwLjQzOS0wLj'+
			'AxbDAuNTYzLTAuMDE1bDAuMDAxLTAuMDAxYzguMTg1LTAuMjgxLDE1LjUxOS0zLjk2NSwyMC42MjUtOS42ODVjMC4wMTMtMC4wMTcsMC4wMzQtMC4wMjIsMC4wNDYtMC4wNCAgQzUwLjY4Miw0OC4yNDEsNTAuNjgyLDQ4LjIzMSw1MC42ODgsNDguMjIyeiBNMi4wMjUsMzBoMTIuMDAzYzAuMTEzLDQuMjM5LDAuOTQxLDguMzU4LDIuNDE1LDEyLjIxNyAgYy0yLjg0NCwxLjAyOS01LjU2MywyLjQwOS04LjExMSw0LjEzMUM0LjU4NSw0MS44OTEsMi4yNTMsMzYuMjEsMi4wMjUsMzB6IE04Ljg3OCwxMS4wMjNjMi40ODgsMS42MTgsNS4xMzcsMi45MTQsNy45LDMuODgyICBDMTUuMDg2LDE5LjAxMiwx'+
			'NC4xNSwyMy40NCwxNC4wMjgsMjhIMi4wMjVDMi4yNjQsMjEuNDkzLDQuODEyLDE1LjU2OCw4Ljg3OCwxMS4wMjN6IE01NS45NzUsMjhINDMuOTcyICBjLTAuMTIyLTQuNTYtMS4wNTgtOC45ODgtMi43NS0xMy4wOTVjMi43NjMtMC45NjgsNS40MTItMi4yNjQsNy45LTMuODgyQzUzLjE4OCwxNS41NjgsNTUuNzM2LDIxLjQ5Myw1NS45NzUsMjh6IE0yOCwxNC45NjMgIGMtMi44OTEtMC4wODItNS43MjktMC41MTMtOC40NzEtMS4yODNDMjEuNTU2LDkuNTIyLDI0LjQxOCw1Ljc2OSwyOCwyLjY0NFYxNC45NjN6IE0yOCwxNi45NjNWMjhIMTYuMDI4ICBjMC4xMjMtNC4zNDgsMS4wMzUtOC41NjUsMi'+
			'42NjYtMTIuNDc1QzIxLjcsMTYuMzk2LDI0LjgyMSwxNi44NzgsMjgsMTYuOTYzeiBNMzAsMTYuOTYzYzMuMTc5LTAuMDg1LDYuMy0wLjU2Niw5LjMwNy0xLjQzOCAgYzEuNjMxLDMuOTEsMi41NDMsOC4xMjcsMi42NjYsMTIuNDc1SDMwVjE2Ljk2M3ogTTMwLDE0Ljk2M1YyLjY0NGMzLjU4MiwzLjEyNSw2LjQ0NCw2Ljg3OCw4LjQ3MSwxMS4wMzYgIEMzNS43MjksMTQuNDUsMzIuODkxLDE0Ljg4MSwzMCwxNC45NjN6IE00MC40MDksMTMuMDcyYy0xLjkyMS00LjAyNS00LjU4Ny03LjY5Mi03Ljg4OC0xMC44MzUgIGM1Ljg1NiwwLjc2NiwxMS4xMjUsMy40MTQsMTUuMTgzLDcuMzE4QzQ1LjQsMTEu'+
			'MDE3LDQyLjk1NiwxMi4xOTMsNDAuNDA5LDEzLjA3MnogTTE3LjU5MSwxMy4wNzIgIGMtMi41NDctMC44NzktNC45OTEtMi4wNTUtNy4yOTQtMy41MTdjNC4wNTctMy45MDQsOS4zMjctNi41NTIsMTUuMTgzLTcuMzE4QzIyLjE3OCw1LjM4LDE5LjUxMiw5LjA0NywxNy41OTEsMTMuMDcyeiBNMTYuMDI4LDMwICBIMjh2MTAuMDM4Yy0zLjMwNywwLjA4OC02LjU0NywwLjYwNC05LjY2MSwxLjU0MUMxNi45MzIsMzcuOTI0LDE2LjE0MSwzNC4wMTksMTYuMDI4LDMweiBNMjgsNDIuMDM4djEzLjMxOCAgYy0zLjgzNC0zLjM0NS02Ljg0LTcuNDA5LTguODg0LTExLjkxN0MyMS45ODMsNDIuNTk0LDI0Lj'+
			'k2MSw0Mi4xMjQsMjgsNDIuMDM4eiBNMzAsNTUuMzU2VjQyLjAzOCAgYzMuMDM5LDAuMDg1LDYuMDE3LDAuNTU2LDguODg0LDEuNEMzNi44NCw0Ny45NDcsMzMuODM0LDUyLjAxMSwzMCw1NS4zNTZ6IE0zMCw0MC4wMzhWMzBoMTEuOTcyICBjLTAuMTEzLDQuMDE5LTAuOTA0LDcuOTI0LTIuMzEyLDExLjU4QzM2LjU0Nyw0MC42NDIsMzMuMzA3LDQwLjEyNiwzMCw0MC4wMzh6IE00My45NzIsMzBoMTIuMDAzICBjLTAuMjI4LDYuMjEtMi41NTksMTEuODkxLTYuMzA3LDE2LjM0OGMtMi41NDgtMS43MjItNS4yNjctMy4xMDItOC4xMTEtNC4xMzFDNDMuMDMyLDM4LjM1OCw0My44NTksMzQuMjM5LDQz'+
			'Ljk3MiwzMHogICBNOS42OTEsNDcuODQ2YzIuMzY2LTEuNTcyLDQuODg1LTIuODM2LDcuNTE3LTMuNzgxYzEuOTQ1LDQuMzYsNC43MzcsOC4zMzMsOC4yNzEsMTEuNjk4QzE5LjMyOCw1NC45NTgsMTMuODIzLDUyLjA3OCw5LjY5MSw0Ny44NDYgIHogTTMyLjUyMSw1NS43NjNjMy41MzQtMy4zNjQsNi4zMjYtNy4zMzcsOC4yNzEtMTEuNjk4YzIuNjMyLDAuOTQ1LDUuMTUsMi4yMDksNy41MTcsMy43ODEgIEM0NC4xNzcsNTIuMDc4LDM4LjY3Miw1NC45NTgsMzIuNTIxLDU1Ljc2M3oiIGZpbGw9IiNjNDU5MGMiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPG'+
			'c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
		me._map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;map;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 98px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.onclick=function (e) {
			me._webpagedisplay.ggText="<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d2504.6244287164354!2d44.78618237638698!3d41.709357375987516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd6b58b68d9%3A0x77e55089e36a3af1!2sRestaurant+Qalaqi!5e0!3m2!1ska!2sge!4v1552410927252\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen><\/iframe>";
			me._webpagedisplay.ggTextDiv.innerHTML=me._webpagedisplay.ggText;
			if (me._webpagedisplay.ggUpdateText) {
				me._webpagedisplay.ggUpdateText=function() {
					var hs="<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d2504.6244287164354!2d44.78618237638698!3d41.709357375987516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd6b58b68d9%3A0x77e55089e36a3af1!2sRestaurant+Qalaqi!5e0!3m2!1ska!2sge!4v1552410927252\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._webpagedisplay.ggUpdatePosition) {
				me._webpagedisplay.ggUpdatePosition();
			}
			me._webpagedisplay.ggTextDiv.scrollTop = 0;
			me._webpagedisplay.style[domTransition]='none';
			me._webpagedisplay.style.visibility=(Number(me._webpagedisplay.style.opacity)>0||!me._webpagedisplay.style.opacity)?'inherit':'hidden';
			me._webpagedisplay.ggVisible=true;
			me._webscreentint.style[domTransition]='none';
			me._webscreentint.style.visibility=(Number(me._webscreentint.style.opacity)>0||!me._webscreentint.style.opacity)?'inherit':'hidden';
			me._webscreentint.ggVisible=true;
			me._webpageclose.style[domTransition]='none';
			me._webpageclose.style.visibility=(Number(me._webpageclose.style.opacity)>0||!me._webpageclose.style.opacity)?'inherit':'hidden';
			me._webpageclose.ggVisible=true;
			me._webpageloading.style[domTransition]='none';
			me._webpageloading.style.visibility=(Number(me._webpageloading.style.opacity)>0||!me._webpageloading.style.opacity)?'inherit':'hidden';
			me._webpageloading.ggVisible=true;
		}
		me._map.onmouseover=function (e) {
			me._map__img.style.visibility='hidden';
			me._map__imgo.style.visibility='inherit';
		}
		me._map.onmouseout=function (e) {
			me._map__img.style.visibility='inherit';
			me._map__imgo.style.visibility='hidden';
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD'+
			'0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzQyLjY5NCAzNDIuNjk0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDIuNjk0IDM0Mi42OTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTQwLjU1MSwyMzkuOTY0aDcwLjI3N2MzLjA3NSwwLDUuNTYxLTIuNDg2LDUuNTYxLTUuNTYxdi02MS4yMjZoNjYuNzk4YzMuMDc0LDAsMy45MTUtMS44NjcsMS44NzMtNC4xNzNMMTc5LjcyNCw1MC4wMjMgICBjLTIuMDM5LTIuMzA2LTUuMzQxLTIuMzEyLTcuMzg5LTAuMDEyTDY2LjMyOSwx'+
			'NjkuMDE4Yy0yLjA0OCwyLjMwNS0xLjIxMyw0LjE2MSwxLjg2MSw0LjE2MWg2Ni43OTd2NjEuMjM3ICAgQzEzNC45ODgsMjM3LjQ3OCwxMzcuNDc3LDIzOS45NjQsMTQwLjU1MSwyMzkuOTY0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTMxOC43NTksNTcuNzQzaC00NC4zNjNjLTEzLjIxMSwwLTIzLjkzNiw5LjM3Ni0yMy45MzYsMjAuOTQxYzAsMTEuNTY1LDAsMjAuOTQ1LDAsMjAuOTQ1aDUwLjM0NXYxNTIuODg1SDQxLjg4N1Y5OS42MjkgICBoNTkuMDQyVjc4LjY4NGMwLTExLjU2NS0xMC43MTktMjAuOTQxLTIzLjkzOC0yMC45NDFIMjMuOTM4QzEwLjcxOSw1Ny43NDMsMCw2OC40NT'+
			'gsMCw4MS42NzJ2MTg4Ljc5MSAgIGMwLDEzLjIxNywxMC43MTksMjMuOTQxLDIzLjkzOCwyMy45NDFoMjk0LjgyYzEzLjIxMSwwLDIzLjkzNi0xMC43MTMsMjMuOTM2LTIzLjk0MVY4MS42NzIgICBDMzQyLjY5NCw2OC40NTgsMzMxLjk3LDU3Ljc0MywzMTguNzU5LDU3Ljc0M3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_3;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD'+
			'0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzQyLjY5NCAzNDIuNjk0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDIuNjk0IDM0Mi42OTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTQwLjU1MSwyMzkuOTY0aDcwLjI3N2MzLjA3NSwwLDUuNTYxLTIuNDg2LDUuNTYxLTUuNTYxdi02MS4yMjZoNjYuNzk4YzMuMDc0LDAsMy45MTUtMS44NjcsMS44NzMtNC4xNzNMMTc5LjcyNCw1MC4wMjMgICBjLTIuMDM5LTIuMzA2LTUuMzQxLTIuMzEyLTcuMzg5LTAuMDEyTDY2LjMyOSwx'+
			'NjkuMDE4Yy0yLjA0OCwyLjMwNS0xLjIxMyw0LjE2MSwxLjg2MSw0LjE2MWg2Ni43OTd2NjEuMjM3ICAgQzEzNC45ODgsMjM3LjQ3OCwxMzcuNDc3LDIzOS45NjQsMTQwLjU1MSwyMzkuOTY0eiIgZmlsbD0iI2M0NTkwYyIvPgoJPHBhdGggZD0iTTMxOC43NTksNTcuNzQzaC00NC4zNjNjLTEzLjIxMSwwLTIzLjkzNiw5LjM3Ni0yMy45MzYsMjAuOTQxYzAsMTEuNTY1LDAsMjAuOTQ1LDAsMjAuOTQ1aDUwLjM0NXYxNTIuODg1SDQxLjg4N1Y5OS42MjkgICBoNTkuMDQyVjc4LjY4NGMwLTExLjU2NS0xMC43MTktMjAuOTQxLTIzLjkzOC0yMC45NDFIMjMuOTM4QzEwLjcxOSw1Ny43NDMsMCw2OC40NT'+
			'gsMCw4MS42NzJ2MTg4Ljc5MSAgIGMwLDEzLjIxNywxMC43MTksMjMuOTQxLDIzLjkzOCwyMy45NDFoMjk0LjgyYzEzLjIxMSwwLDIzLjkzNi0xMC43MTMsMjMuOTM2LTIzLjk0MVY4MS42NzIgICBDMzQyLjY5NCw2OC40NTgsMzMxLjk3LDU3Ljc0MywzMTguNzU5LDU3Ljc0M3oiIGZpbGw9IiNjNDU5MGMiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
		me._svg_3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_3;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -4px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='position : absolute;';
		hs+='right : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_3.onclick=function (e) {
			me._rectangle_1.ggVisible = !me._rectangle_1.ggVisible;
			var flag=me._rectangle_1.ggVisible;
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.style.visibility=((flag)&&(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity))?'inherit':'hidden';
			me._svg_7.ggVisible = !me._svg_7.ggVisible;
			var flag=me._svg_7.ggVisible;
			me._svg_7.style[domTransition]='none';
			me._svg_7.style.visibility=((flag)&&(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity))?'inherit':'hidden';
		}
		me._svg_3.onmouseover=function (e) {
			me._svg_3__img.style.visibility='hidden';
			me._svg_3__imgo.style.visibility='inherit';
		}
		me._svg_3.onmouseout=function (e) {
			me._svg_3__img.style.visibility='inherit';
			me._svg_3__imgo.style.visibility='hidden';
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_3);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD'+
			'0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxNy4yMTUgMzE3LjIxNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE3LjIxNSAzMTcuMjE1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMzA5LjcxNSwxLjEwN2gtNzEuMjIzYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41djIwYzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVoMTguOTczICAgbC01Ny4xMjksNTcuMTI3Yy0xLjQwNiwxLjQwNi0yLjE5NywzLjMxNC0yLjE5Nyw1LjMwM2MwLDEuOTg5LDAuNzkxLDMuODk3LDIuMTk3'+
			'LDUuMzAzbDE0LjE0MywxNC4xNDMgICBjMS40NjUsMS40NjUsMy4zODQsMi4xOTcsNS4zMDQsMi4xOTdjMS45MTksMCwzLjgzOS0wLjczMyw1LjMwNC0yLjE5N2w1Ny4xMjktNTcuMTI3Vjc5LjgzYzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVoMjAgICBjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNVY4LjYwN0MzMTcuMjE1LDQuNDY1LDMxMy44NTcsMS4xMDcsMzA5LjcxNSwxLjEwN3oiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik01OS43NSwzNi4xMDdoMTguOTczYzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjV2LTIwYzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVINy41ICAgYy00LjE0My'+
			'wwLTcuNSwzLjM1OC03LjUsNy41Vjc5LjgzYzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVoMjBjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNVY2MC44NTdsNTcuMTI1LDU3LjEyNiAgIGMxLjQ2NSwxLjQ2NCwzLjM4NSwyLjE5Nyw1LjMwNSwyLjE5N2MxLjkxOSwwLDMuODM5LTAuNzMzLDUuMzA1LTIuMTk3bDE0LjE0Mi0xNC4xNDNjMS40MDYtMS40MDYsMi4xOTYtMy4zMTQsMi4xOTYtNS4zMDMgICBjMC0xLjk4OS0wLjc5LTMuODk3LTIuMTk2LTUuMzAzTDU5Ljc1LDM2LjEwN3oiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0xMDIuNzM0LDE5OS4yMzNjLTIuOTMtMi45MjktNy42NzgtMi45'+
			'MjktMTAuNjA5LDBMMzUsMjU2LjM1OHYtMTguOTc0YzAtNC4xNDItMy4zNTctNy41LTcuNS03LjUgICBoLTIwYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41djcxLjIyM2MwLDQuMTQyLDMuMzU3LDcuNSw3LjUsNy41aDcxLjIyM2M0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41di0yMCAgIGMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41SDU5Ljc1bDU3LjEyNi01Ny4xMjVjMS40MDYtMS40MDYsMi4xOTYtMy4zMTQsMi4xOTYtNS4zMDNjMC0xLjk4OS0wLjc5LTMuODk3LTIuMTk2LTUuMzAzICAgTDEwMi43MzQsMTk5LjIzM3oiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0zMDkuNzE1LDIyOS'+
			'44ODVoLTIwYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41djE4Ljk3NmwtNTcuMTMtNTcuMTI3ICAgYy0yLjkyOS0yLjkyOS03LjY3Ny0yLjkyOS0xMC42MDYsMGwtMTQuMTQzLDE0LjE0M2MtMS40MDYsMS40MDYtMi4xOTcsMy4zMTQtMi4xOTcsNS4zMDNjMCwxLjk4OSwwLjc5MSwzLjg5NywyLjE5OCw1LjMwMyAgIGw1Ny4xMjgsNTcuMTI1aC0xOC45NzNjLTQuMTQzLDAtNy41LDMuMzU4LTcuNSw3LjV2MjBjMCw0LjE0MiwzLjM1Nyw3LjUsNy41LDcuNWg3MS4yMjNjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXYtNzEuMjIzICAgQzMxNy4yMTUsMjMzLjI0MywzMTMuODU3LDIyOS44ODUsMzA5'+
			'LjcxNSwyMjkuODg1eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_4;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD'+
			'0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxNy4yMTUgMzE3LjIxNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE3LjIxNSAzMTcuMjE1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMzA5LjcxNSwxLjEwN2gtNzEuMjIzYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41djIwYzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVoMTguOTczICAgbC01Ny4xMjksNTcuMTI3Yy0xLjQwNiwxLjQwNi0yLjE5NywzLjMxNC0yLjE5Nyw1LjMwM2MwLDEuOTg5LDAuNzkxLDMuODk3LDIuMTk3'+
			'LDUuMzAzbDE0LjE0MywxNC4xNDMgICBjMS40NjUsMS40NjUsMy4zODQsMi4xOTcsNS4zMDQsMi4xOTdjMS45MTksMCwzLjgzOS0wLjczMyw1LjMwNC0yLjE5N2w1Ny4xMjktNTcuMTI3Vjc5LjgzYzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVoMjAgICBjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNVY4LjYwN0MzMTcuMjE1LDQuNDY1LDMxMy44NTcsMS4xMDcsMzA5LjcxNSwxLjEwN3oiIGZpbGw9IiNjNDU5MGMiLz4KCTxwYXRoIGQ9Ik01OS43NSwzNi4xMDdoMTguOTczYzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjV2LTIwYzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVINy41ICAgYy00LjE0My'+
			'wwLTcuNSwzLjM1OC03LjUsNy41Vjc5LjgzYzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVoMjBjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNVY2MC44NTdsNTcuMTI1LDU3LjEyNiAgIGMxLjQ2NSwxLjQ2NCwzLjM4NSwyLjE5Nyw1LjMwNSwyLjE5N2MxLjkxOSwwLDMuODM5LTAuNzMzLDUuMzA1LTIuMTk3bDE0LjE0Mi0xNC4xNDNjMS40MDYtMS40MDYsMi4xOTYtMy4zMTQsMi4xOTYtNS4zMDMgICBjMC0xLjk4OS0wLjc5LTMuODk3LTIuMTk2LTUuMzAzTDU5Ljc1LDM2LjEwN3oiIGZpbGw9IiNjNDU5MGMiLz4KCTxwYXRoIGQ9Ik0xMDIuNzM0LDE5OS4yMzNjLTIuOTMtMi45MjktNy42NzgtMi45'+
			'MjktMTAuNjA5LDBMMzUsMjU2LjM1OHYtMTguOTc0YzAtNC4xNDItMy4zNTctNy41LTcuNS03LjUgICBoLTIwYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41djcxLjIyM2MwLDQuMTQyLDMuMzU3LDcuNSw3LjUsNy41aDcxLjIyM2M0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41di0yMCAgIGMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41SDU5Ljc1bDU3LjEyNi01Ny4xMjVjMS40MDYtMS40MDYsMi4xOTYtMy4zMTQsMi4xOTYtNS4zMDNjMC0xLjk4OS0wLjc5LTMuODk3LTIuMTk2LTUuMzAzICAgTDEwMi43MzQsMTk5LjIzM3oiIGZpbGw9IiNjNDU5MGMiLz4KCTxwYXRoIGQ9Ik0zMDkuNzE1LDIyOS'+
			'44ODVoLTIwYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41djE4Ljk3NmwtNTcuMTMtNTcuMTI3ICAgYy0yLjkyOS0yLjkyOS03LjY3Ny0yLjkyOS0xMC42MDYsMGwtMTQuMTQzLDE0LjE0M2MtMS40MDYsMS40MDYtMi4xOTcsMy4zMTQtMi4xOTcsNS4zMDNjMCwxLjk4OSwwLjc5MSwzLjg5NywyLjE5OCw1LjMwMyAgIGw1Ny4xMjgsNTcuMTI1aC0xOC45NzNjLTQuMTQzLDAtNy41LDMuMzU4LTcuNSw3LjV2MjBjMCw0LjE0MiwzLjM1Nyw3LjUsNy41LDcuNWg3MS4yMjNjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXYtNzEuMjIzICAgQzMxNy4yMTUsMjMzLjI0MywzMTMuODU3LDIyOS44ODUsMzA5'+
			'LjcxNSwyMjkuODg1eiIgZmlsbD0iI2M0NTkwYyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';
		me._svg_4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_4;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 13px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_4.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._svg_4.onmouseover=function (e) {
			me._svg_4__img.style.visibility='hidden';
			me._svg_4__imgo.style.visibility='inherit';
		}
		me._svg_4.onmouseout=function (e) {
			me._svg_4__img.style.visibility='inherit';
			me._svg_4__imgo.style.visibility='hidden';
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_4);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM5Ni42NjcgMzk2LjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk2LjY2NyAzOTYuNjY3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNyw4Ny44MzNoMzYyLjY2N2M5LjM1LDAsMT'+
			'ctNy42NSwxNy0xN3MtNy42NS0xNy0xNy0xN0gxN2MtOS4zNSwwLTE3LDcuNjUtMTcsMTdDMCw4MC4xODMsNy42NSw4Ny44MzMsMTcsODcuODMzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0Y4RjhGOCIgZmlsbD0iI0Y5RjlGOSIvPgoJCTxwYXRoIGQ9Ik0xNywyMTUuMzMzaDM2Mi42NjdjOS4zNSwwLDE3LTcuNjUsMTctMTdzLTcuNjUtMTctMTctMTdIMTdjLTkuMzUsMC0xNyw3LjY1LTE3LDE3UzcuNjUsMjE1LjMzMywxNywyMTUuMzMzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRh'+
			'LW9sZF9jb2xvcj0iI0Y4RjhGOCIgZmlsbD0iI0Y5RjlGOSIvPgoJCTxwYXRoIGQ9Ik0xNywzNDIuODMzaDM2Mi42NjdjOS4zNSwwLDE3LTcuNjUsMTctMTdzLTcuNjUtMTctMTctMTdIMTdjLTkuMzUsMC0xNyw3LjY1LTE3LDE3UzcuNjUsMzQyLjgzMywxNywzNDIuODMzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0Y4RjhGOCIgZmlsbD0iI0Y5RjlGOSIvPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM5Ni42NjcgMzk2LjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk2LjY2NyAzOTYuNjY3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNyw4Ny44MzNoMzYyLjY2N2M5LjM1LDAsMT'+
			'ctNy42NSwxNy0xN3MtNy42NS0xNy0xNy0xN0gxN2MtOS4zNSwwLTE3LDcuNjUtMTcsMTdDMCw4MC4xODMsNy42NSw4Ny44MzMsMTcsODcuODMzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0NDOTc1NCIgZmlsbD0iI0NDOTY1MyIvPgoJCTxwYXRoIGQ9Ik0xNywyMTUuMzMzaDM2Mi42NjdjOS4zNSwwLDE3LTcuNjUsMTctMTdzLTcuNjUtMTctMTctMTdIMTdjLTkuMzUsMC0xNyw3LjY1LTE3LDE3UzcuNjUsMjE1LjMzMywxNywyMTUuMzMzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRh'+
			'LW9sZF9jb2xvcj0iI0NDOTc1NCIgZmlsbD0iI0NDOTY1MyIvPgoJCTxwYXRoIGQ9Ik0xNywzNDIuODMzaDM2Mi42NjdjOS4zNSwwLDE3LTcuNjUsMTctMTdzLTcuNjUtMTctMTctMTdIMTdjLTkuMzUsMC0xNyw3LjY1LTE3LDE3UzcuNjUsMzQyLjgzMywxNywzNDIuODMzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0NDOTc1NCIgZmlsbD0iI0NDOTY1MyIvPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4K';
		me._svg_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_2;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			me.__rooms_menu_canvas.ggVisible = !me.__rooms_menu_canvas.ggVisible;
			var flag=me.__rooms_menu_canvas.ggVisible;
			me.__rooms_menu_canvas.style[domTransition]='none';
			me.__rooms_menu_canvas.style.visibility=((flag)&&(Number(me.__rooms_menu_canvas.style.opacity)>0||!me.__rooms_menu_canvas.style.opacity))?'inherit':'hidden';
			me.__rooms_menu.ggVisible = !me.__rooms_menu.ggVisible;
			var flag=me.__rooms_menu.ggVisible;
			me.__rooms_menu.style[domTransition]='none';
			me.__rooms_menu.style.visibility=((flag)&&(Number(me.__rooms_menu.style.opacity)>0||!me.__rooms_menu.style.opacity))?'inherit':'hidden';
		}
		me._svg_2.onmouseover=function (e) {
			me._svg_2__img.style.visibility='hidden';
			me._svg_2__imgo.style.visibility='inherit';
		}
		me._svg_2.onmouseout=function (e) {
			me._svg_2__img.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_2);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=20;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : rgba(255,233,153,0.980392);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 276px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 449px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI1NiwwQzExNC42MDksMCwwLDExNC42MDksMCwyNTZjMCwxNDEuMzkxLDExNC42MDksMjU2LDI1NiwyNTZjMTQxLjM5MSwwLDI1Ni0xMTQuNjA5LDI1Ni0yNTYNCgkJQzUxMiwxMTQuNjA5LDM5Ny4zOTEsMCwyNTYsMHogTTI1Niw0NzJjLTExOS4yOTcsMC0yMTYtOTYuNzAzLTIxNi0yMTZTMTM2LjcwMyw0'+
			'MCwyNTYsNDBzMjE2LDk2LjcwMywyMTYsMjE2UzM3NS4yOTcsNDcyLDI1Niw0NzJ6DQoJCSIvPg0KCTxwYXRoIGQ9Ik0zMTYuNzUsMjE2LjgxMmgtNDQuNTMxdi0zMi41YzAtOS45NjksMTAuMzEyLTEyLjI4MSwxNS4xMjUtMTIuMjgxYzQuNzgxLDAsMjguNzY3LDAsMjguNzY3LDB2LTQzLjg1OUwyODMuMTQxLDEyOA0KCQljLTQ0Ljk4MywwLTU1LjI1LDMyLjcwMy01NS4yNSw1My42NzJ2MzUuMTQxSDE5NS4yNVYyNjJoMzIuNjQxYzAsNTguMDE2LDAsMTIyLDAsMTIyaDQ0LjMyOGMwLDAsMC02NC42NDEsMC0xMjJoMzcuNjU2DQoJCUwzMTYuNzUsMjE2LjgxMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg'+
			'0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_5;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnPgoJPHBhdGggZD0iTTI1NiwwQzExNC42MDksMCwwLDExNC42MDksMCwyNTZjMCwxNDEuMzkxLDExNC42MD'+
			'ksMjU2LDI1NiwyNTZjMTQxLjM5MSwwLDI1Ni0xMTQuNjA5LDI1Ni0yNTYgICBDNTEyLDExNC42MDksMzk3LjM5MSwwLDI1NiwweiBNMjU2LDQ3MmMtMTE5LjI5NywwLTIxNi05Ni43MDMtMjE2LTIxNlMxMzYuNzAzLDQwLDI1Niw0MHMyMTYsOTYuNzAzLDIxNiwyMTZTMzc1LjI5Nyw0NzIsMjU2LDQ3MnogICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMyRDU0QjIiIGZpbGw9IiMyQjREQTAiLz4KCTxwYXRoIGQ9Ik0zMTYuNzUsMjE2LjgxMmgtNDQuNTMxdi0zMi41YzAtOS45NjksMTAuMzEyLTEyLjI4MSwxNS4xMjUtMTIuMjgx'+
			'YzQuNzgxLDAsMjguNzY3LDAsMjguNzY3LDB2LTQzLjg1OUwyODMuMTQxLDEyOCAgIGMtNDQuOTgzLDAtNTUuMjUsMzIuNzAzLTU1LjI1LDUzLjY3MnYzNS4xNDFIMTk1LjI1VjI2MmgzMi42NDFjMCw1OC4wMTYsMCwxMjIsMCwxMjJoNDQuMzI4YzAsMCwwLTY0LjY0MSwwLTEyMmgzNy42NTYgICBMMzE2Ljc1LDIxNi44MTJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMkQ1NEIyIiBmaWxsPSIjMkI0REEwIi8+CjwvZz48L2c+IDwvc3ZnPgo=';
		me._svg_5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_5;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 5";
		el.ggDx=-174;
		el.ggDy=11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/Walkinto.Ge\/","_blank");
		}
		me._svg_5.onmouseover=function (e) {
			me._svg_5__img.style.visibility='hidden';
			me._svg_5__imgo.style.visibility='inherit';
		}
		me._svg_5.onmouseout=function (e) {
			me._svg_5__img.style.visibility='inherit';
			me._svg_5__imgo.style.visibility='hidden';
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._svg_5);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTggNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4IDU4OyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNTAuNjg4LDQ4LjIyMkM1NS4yMzIsNDMuMTAxLDU4LDM2LjM2OSw1OCwyOWMwLTcuNjY3LTIuOTk2LTE0LjY0My03Ljg3Mi0xOS44MzRjMCwwLDAtMC4wMDEsMC0wLjAwMQ0KCWMtMC4wMDQtMC4wMDYtMC4wMS0wLjAwOC0wLjAxMy0wLjAxM2MtNS4wNzktNS4zOTktMTIuMTk1LTguODU1LTIwLjExLTkuMTI2bC0wLjAwMS0wLjAwMUwyOS40MzksMC4wMUMyOS4yOTMsMC4wMDUsMjkuMTQ3LDAsMjksMA0KCXMtMC4yOTMsMC4wMDUtMC40MzksMC4wMWwtMC41NjMsMC4wMTVsLTAuMDAxLDAuMDAxYy03LjkxNSwwLjI3MS0xNS4wMzEsMy43MjctMjAuMTEs'+
			'OS4xMjZjLTAuMDA0LDAuMDA1LTAuMDEsMC4wMDctMC4wMTMsMC4wMTMNCgljMCwwLDAsMC4wMDEtMC4wMDEsMC4wMDJDMi45OTYsMTQuMzU3LDAsMjEuMzMzLDAsMjljMCw3LjM2OSwyLjc2OCwxNC4xMDEsNy4zMTIsMTkuMjIyYzAuMDA2LDAuMDA5LDAuMDA2LDAuMDE5LDAuMDEzLDAuMDI4DQoJYzAuMDE4LDAuMDI1LDAuMDQ0LDAuMDM3LDAuMDYzLDAuMDZjNS4xMDYsNS43MDgsMTIuNDMyLDkuMzg1LDIwLjYwOCw5LjY2NWwwLjAwMSwwLjAwMWwwLjU2MywwLjAxNUMyOC43MDcsNTcuOTk1LDI4Ljg1Myw1OCwyOSw1OA0KCXMwLjI5My0wLjAwNSwwLjQzOS0wLjAxbDAuNTYzLTAuMDE1bDAuMD'+
			'AxLTAuMDAxYzguMTg1LTAuMjgxLDE1LjUxOS0zLjk2NSwyMC42MjUtOS42ODVjMC4wMTMtMC4wMTcsMC4wMzQtMC4wMjIsMC4wNDYtMC4wNA0KCUM1MC42ODIsNDguMjQxLDUwLjY4Miw0OC4yMzEsNTAuNjg4LDQ4LjIyMnogTTIuMDI1LDMwaDEyLjAwM2MwLjExMyw0LjIzOSwwLjk0MSw4LjM1OCwyLjQxNSwxMi4yMTcNCgljLTIuODQ0LDEuMDI5LTUuNTYzLDIuNDA5LTguMTExLDQuMTMxQzQuNTg1LDQxLjg5MSwyLjI1MywzNi4yMSwyLjAyNSwzMHogTTguODc4LDExLjAyM2MyLjQ4OCwxLjYxOCw1LjEzNywyLjkxNCw3LjksMy44ODINCglDMTUuMDg2LDE5LjAxMiwxNC4xNSwyMy40NCwxNC4w'+
			'MjgsMjhIMi4wMjVDMi4yNjQsMjEuNDkzLDQuODEyLDE1LjU2OCw4Ljg3OCwxMS4wMjN6IE01NS45NzUsMjhINDMuOTcyDQoJYy0wLjEyMi00LjU2LTEuMDU4LTguOTg4LTIuNzUtMTMuMDk1YzIuNzYzLTAuOTY4LDUuNDEyLTIuMjY0LDcuOS0zLjg4MkM1My4xODgsMTUuNTY4LDU1LjczNiwyMS40OTMsNTUuOTc1LDI4eiBNMjgsMTQuOTYzDQoJYy0yLjg5MS0wLjA4Mi01LjcyOS0wLjUxMy04LjQ3MS0xLjI4M0MyMS41NTYsOS41MjIsMjQuNDE4LDUuNzY5LDI4LDIuNjQ0VjE0Ljk2M3ogTTI4LDE2Ljk2M1YyOEgxNi4wMjgNCgljMC4xMjMtNC4zNDgsMS4wMzUtOC41NjUsMi42NjYtMTIuNDc1Qz'+
			'IxLjcsMTYuMzk2LDI0LjgyMSwxNi44NzgsMjgsMTYuOTYzeiBNMzAsMTYuOTYzYzMuMTc5LTAuMDg1LDYuMy0wLjU2Niw5LjMwNy0xLjQzOA0KCWMxLjYzMSwzLjkxLDIuNTQzLDguMTI3LDIuNjY2LDEyLjQ3NUgzMFYxNi45NjN6IE0zMCwxNC45NjNWMi42NDRjMy41ODIsMy4xMjUsNi40NDQsNi44NzgsOC40NzEsMTEuMDM2DQoJQzM1LjcyOSwxNC40NSwzMi44OTEsMTQuODgxLDMwLDE0Ljk2M3ogTTQwLjQwOSwxMy4wNzJjLTEuOTIxLTQuMDI1LTQuNTg3LTcuNjkyLTcuODg4LTEwLjgzNQ0KCWM1Ljg1NiwwLjc2NiwxMS4xMjUsMy40MTQsMTUuMTgzLDcuMzE4QzQ1LjQsMTEuMDE3LDQyLjk1'+
			'NiwxMi4xOTMsNDAuNDA5LDEzLjA3MnogTTE3LjU5MSwxMy4wNzINCgljLTIuNTQ3LTAuODc5LTQuOTkxLTIuMDU1LTcuMjk0LTMuNTE3YzQuMDU3LTMuOTA0LDkuMzI3LTYuNTUyLDE1LjE4My03LjMxOEMyMi4xNzgsNS4zOCwxOS41MTIsOS4wNDcsMTcuNTkxLDEzLjA3MnogTTE2LjAyOCwzMA0KCUgyOHYxMC4wMzhjLTMuMzA3LDAuMDg4LTYuNTQ3LDAuNjA0LTkuNjYxLDEuNTQxQzE2LjkzMiwzNy45MjQsMTYuMTQxLDM0LjAxOSwxNi4wMjgsMzB6IE0yOCw0Mi4wMzh2MTMuMzE4DQoJYy0zLjgzNC0zLjM0NS02Ljg0LTcuNDA5LTguODg0LTExLjkxN0MyMS45ODMsNDIuNTk0LDI0Ljk2MSw0Mi'+
			'4xMjQsMjgsNDIuMDM4eiBNMzAsNTUuMzU2VjQyLjAzOA0KCWMzLjAzOSwwLjA4NSw2LjAxNywwLjU1Niw4Ljg4NCwxLjRDMzYuODQsNDcuOTQ3LDMzLjgzNCw1Mi4wMTEsMzAsNTUuMzU2eiBNMzAsNDAuMDM4VjMwaDExLjk3Mg0KCWMtMC4xMTMsNC4wMTktMC45MDQsNy45MjQtMi4zMTIsMTEuNThDMzYuNTQ3LDQwLjY0MiwzMy4zMDcsNDAuMTI2LDMwLDQwLjAzOHogTTQzLjk3MiwzMGgxMi4wMDMNCgljLTAuMjI4LDYuMjEtMi41NTksMTEuODkxLTYuMzA3LDE2LjM0OGMtMi41NDgtMS43MjItNS4yNjctMy4xMDItOC4xMTEtNC4xMzFDNDMuMDMyLDM4LjM1OCw0My44NTksMzQuMjM5LDQzLjk3'+
			'MiwzMHoNCgkgTTkuNjkxLDQ3Ljg0NmMyLjM2Ni0xLjU3Miw0Ljg4NS0yLjgzNiw3LjUxNy0zLjc4MWMxLjk0NSw0LjM2LDQuNzM3LDguMzMzLDguMjcxLDExLjY5OEMxOS4zMjgsNTQuOTU4LDEzLjgyMyw1Mi4wNzgsOS42OTEsNDcuODQ2DQoJeiBNMzIuNTIxLDU1Ljc2M2MzLjUzNC0zLjM2NCw2LjMyNi03LjMzNyw4LjI3MS0xMS42OThjMi42MzIsMC45NDUsNS4xNSwyLjIwOSw3LjUxNywzLjc4MQ0KCUM0NC4xNzcsNTIuMDc4LDM4LjY3Miw1NC45NTgsMzIuNTIxLDU1Ljc2M3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCj'+
			'wvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_6;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTUwLjY4OCw0OC4yMjJDNTUuMjMyLDQzLjEwMSw1OCwzNi4zNjksNTgsMjljMC03LjY2Ny0yLjk5Ni'+
			'0xNC42NDMtNy44NzItMTkuODM0YzAsMCwwLTAuMDAxLDAtMC4wMDEgIGMtMC4wMDQtMC4wMDYtMC4wMS0wLjAwOC0wLjAxMy0wLjAxM2MtNS4wNzktNS4zOTktMTIuMTk1LTguODU1LTIwLjExLTkuMTI2bC0wLjAwMS0wLjAwMUwyOS40MzksMC4wMUMyOS4yOTMsMC4wMDUsMjkuMTQ3LDAsMjksMCAgcy0wLjI5MywwLjAwNS0wLjQzOSwwLjAxbC0wLjU2MywwLjAxNWwtMC4wMDEsMC4wMDFjLTcuOTE1LDAuMjcxLTE1LjAzMSwzLjcyNy0yMC4xMSw5LjEyNmMtMC4wMDQsMC4wMDUtMC4wMSwwLjAwNy0wLjAxMywwLjAxMyAgYzAsMCwwLDAuMDAxLTAuMDAxLDAuMDAyQzIuOTk2LDE0LjM1NywwLDIx'+
			'LjMzMywwLDI5YzAsNy4zNjksMi43NjgsMTQuMTAxLDcuMzEyLDE5LjIyMmMwLjAwNiwwLjAwOSwwLjAwNiwwLjAxOSwwLjAxMywwLjAyOCAgYzAuMDE4LDAuMDI1LDAuMDQ0LDAuMDM3LDAuMDYzLDAuMDZjNS4xMDYsNS43MDgsMTIuNDMyLDkuMzg1LDIwLjYwOCw5LjY2NWwwLjAwMSwwLjAwMWwwLjU2MywwLjAxNUMyOC43MDcsNTcuOTk1LDI4Ljg1Myw1OCwyOSw1OCAgczAuMjkzLTAuMDA1LDAuNDM5LTAuMDFsMC41NjMtMC4wMTVsMC4wMDEtMC4wMDFjOC4xODUtMC4yODEsMTUuNTE5LTMuOTY1LDIwLjYyNS05LjY4NWMwLjAxMy0wLjAxNywwLjAzNC0wLjAyMiwwLjA0Ni0wLjA0ICBDNTAuNj'+
			'gyLDQ4LjI0MSw1MC42ODIsNDguMjMxLDUwLjY4OCw0OC4yMjJ6IE0yLjAyNSwzMGgxMi4wMDNjMC4xMTMsNC4yMzksMC45NDEsOC4zNTgsMi40MTUsMTIuMjE3ICBjLTIuODQ0LDEuMDI5LTUuNTYzLDIuNDA5LTguMTExLDQuMTMxQzQuNTg1LDQxLjg5MSwyLjI1MywzNi4yMSwyLjAyNSwzMHogTTguODc4LDExLjAyM2MyLjQ4OCwxLjYxOCw1LjEzNywyLjkxNCw3LjksMy44ODIgIEMxNS4wODYsMTkuMDEyLDE0LjE1LDIzLjQ0LDE0LjAyOCwyOEgyLjAyNUMyLjI2NCwyMS40OTMsNC44MTIsMTUuNTY4LDguODc4LDExLjAyM3ogTTU1Ljk3NSwyOEg0My45NzIgIGMtMC4xMjItNC41Ni0xLjA1OC04'+
			'Ljk4OC0yLjc1LTEzLjA5NWMyLjc2My0wLjk2OCw1LjQxMi0yLjI2NCw3LjktMy44ODJDNTMuMTg4LDE1LjU2OCw1NS43MzYsMjEuNDkzLDU1Ljk3NSwyOHogTTI4LDE0Ljk2MyAgYy0yLjg5MS0wLjA4Mi01LjcyOS0wLjUxMy04LjQ3MS0xLjI4M0MyMS41NTYsOS41MjIsMjQuNDE4LDUuNzY5LDI4LDIuNjQ0VjE0Ljk2M3ogTTI4LDE2Ljk2M1YyOEgxNi4wMjggIGMwLjEyMy00LjM0OCwxLjAzNS04LjU2NSwyLjY2Ni0xMi40NzVDMjEuNywxNi4zOTYsMjQuODIxLDE2Ljg3OCwyOCwxNi45NjN6IE0zMCwxNi45NjNjMy4xNzktMC4wODUsNi4zLTAuNTY2LDkuMzA3LTEuNDM4ICBjMS42MzEsMy45MS'+
			'wyLjU0Myw4LjEyNywyLjY2NiwxMi40NzVIMzBWMTYuOTYzeiBNMzAsMTQuOTYzVjIuNjQ0YzMuNTgyLDMuMTI1LDYuNDQ0LDYuODc4LDguNDcxLDExLjAzNiAgQzM1LjcyOSwxNC40NSwzMi44OTEsMTQuODgxLDMwLDE0Ljk2M3ogTTQwLjQwOSwxMy4wNzJjLTEuOTIxLTQuMDI1LTQuNTg3LTcuNjkyLTcuODg4LTEwLjgzNSAgYzUuODU2LDAuNzY2LDExLjEyNSwzLjQxNCwxNS4xODMsNy4zMThDNDUuNCwxMS4wMTcsNDIuOTU2LDEyLjE5Myw0MC40MDksMTMuMDcyeiBNMTcuNTkxLDEzLjA3MiAgYy0yLjU0Ny0wLjg3OS00Ljk5MS0yLjA1NS03LjI5NC0zLjUxN2M0LjA1Ny0zLjkwNCw5LjMyNy02'+
			'LjU1MiwxNS4xODMtNy4zMThDMjIuMTc4LDUuMzgsMTkuNTEyLDkuMDQ3LDE3LjU5MSwxMy4wNzJ6IE0xNi4wMjgsMzAgIEgyOHYxMC4wMzhjLTMuMzA3LDAuMDg4LTYuNTQ3LDAuNjA0LTkuNjYxLDEuNTQxQzE2LjkzMiwzNy45MjQsMTYuMTQxLDM0LjAxOSwxNi4wMjgsMzB6IE0yOCw0Mi4wMzh2MTMuMzE4ICBjLTMuODM0LTMuMzQ1LTYuODQtNy40MDktOC44ODQtMTEuOTE3QzIxLjk4Myw0Mi41OTQsMjQuOTYxLDQyLjEyNCwyOCw0Mi4wMzh6IE0zMCw1NS4zNTZWNDIuMDM4ICBjMy4wMzksMC4wODUsNi4wMTcsMC41NTYsOC44ODQsMS40QzM2Ljg0LDQ3Ljk0NywzMy44MzQsNTIuMDExLDMwLD'+
			'U1LjM1NnogTTMwLDQwLjAzOFYzMGgxMS45NzIgIGMtMC4xMTMsNC4wMTktMC45MDQsNy45MjQtMi4zMTIsMTEuNThDMzYuNTQ3LDQwLjY0MiwzMy4zMDcsNDAuMTI2LDMwLDQwLjAzOHogTTQzLjk3MiwzMGgxMi4wMDMgIGMtMC4yMjgsNi4yMS0yLjU1OSwxMS44OTEtNi4zMDcsMTYuMzQ4Yy0yLjU0OC0xLjcyMi01LjI2Ny0zLjEwMi04LjExMS00LjEzMUM0My4wMzIsMzguMzU4LDQzLjg1OSwzNC4yMzksNDMuOTcyLDMweiAgIE05LjY5MSw0Ny44NDZjMi4zNjYtMS41NzIsNC44ODUtMi44MzYsNy41MTctMy43ODFjMS45NDUsNC4zNiw0LjczNyw4LjMzMyw4LjI3MSwxMS42OThDMTkuMzI4LDU0'+
			'Ljk1OCwxMy44MjMsNTIuMDc4LDkuNjkxLDQ3Ljg0NiAgeiBNMzIuNTIxLDU1Ljc2M2MzLjUzNC0zLjM2NCw2LjMyNi03LjMzNyw4LjI3MS0xMS42OThjMi42MzIsMC45NDUsNS4xNSwyLjIwOSw3LjUxNywzLjc4MSAgQzQ0LjE3Nyw1Mi4wNzgsMzguNjcyLDU0Ljk1OCwzMi41MjEsNTUuNzYzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzIyMzdDQSIgZmlsbD0iIzI1MzlDNCIvPjwvZz4gPC9zdmc+Cg==';
		me._svg_6__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_6;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 6";
		el.ggDx=-174;
		el.ggDy=90;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.onclick=function (e) {
			player.openUrl("http:\/\/walkinto.ge\/?lang=ka","_blank");
		}
		me._svg_6.onmouseover=function (e) {
			me._svg_6__img.style.visibility='hidden';
			me._svg_6__imgo.style.visibility='inherit';
		}
		me._svg_6.onmouseout=function (e) {
			me._svg_6__img.style.visibility='inherit';
			me._svg_6__imgo.style.visibility='hidden';
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._svg_6);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjkuNzMxIDI5LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkuNzMxID'+
			'I5LjczMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIzLjg5NSwyOS43MzFjLTEuMjM3LDAtMi43MzEtMC4zMS00LjM3NC0wLjkzYy0zLjYwMi0xLjM1OC03LjUyMS00LjA0Mi0xMS4wMzUtNy41NTYNCgkJYy0zLjUxNS0zLjUxNS02LjE5OS03LjQzNS03LjU1OC0xMS4wMzdDLTAuMzA3LDYuOTMzLTAuMzEsNC4yNDUsMC45MjEsMy4wMTVjMC4xNzctMC4xNzcsMC4zNTctMC4zNjcsMC41NDMtMC41NjMNCgkJYzEuMTIzLTEuMTgxLDIuMzkyLTIuNTEsNC4wNzQtMi40NUM2LjY5NywwLjA1LDcuODIsMC43Nyw4Ljk3LDIuMjAxYzMuMzk4LDQuMjI2LDEuODY2LDUuNzMy'+
			'LDAuMDkzLDcuNDc4bC0wLjMxMywwLjMxDQoJCWMtMC4yOSwwLjI5LTAuODM4LDEuNjMzLDQuMjYsNi43MzFjMS42NjQsMS42NjQsMy4wODMsMi44ODIsNC4yMTcsMy42MTljMC43MTQsMC40NjQsMS45OTEsMS4xNjYsMi41MTUsMC42NDJsMC4zMTUtMC4zMTgNCgkJYzEuNzQ0LTEuNzY5LDMuMjUtMy4yOTYsNy40NzMsMC4wOTljMS40MzEsMS4xNSwyLjE1LDIuMjcyLDIuMTk4LDMuNDMzYzAuMDY5LDEuNjgxLTEuMjcsMi45NTMtMi40NTIsNC4wNzUNCgkJYy0wLjE5NSwwLjE4Ni0wLjM4NSwwLjM2Ni0wLjU2MiwwLjU0MkMyNi4xMDMsMjkuNDI0LDI1LjEyNiwyOS43MzEsMjMuODk1LDI5LjczMX'+
			'ogTTUuNDE4LDFDNC4yMjMsMSwzLjE0NCwyLjEzNiwyLjE4OSwzLjE0MQ0KCQlDMS45OTcsMy4zNDMsMS44MTEsMy41MzksMS42MjgsMy43MjJDMC43MTEsNC42MzgsMC44MDQsNy4wNDUsMS44NjQsOS44NTZjMS4zMSwzLjQ3MiwzLjkxMyw3LjI2Niw3LjMzLDEwLjY4Mw0KCQljMy40MTYsMy40MTUsNy4yMDgsNi4wMTgsMTAuNjgxLDcuMzI3YzIuODExLDEuMDYyLDUuMjE4LDEuMTUyLDYuMTMzLDAuMjM3YzAuMTgzLTAuMTgzLDAuMzc5LTAuMzY5LDAuNTgxLTAuNTYNCgkJYzEuMDI3LTAuOTc2LDIuMTkyLTIuMDgyLDIuMTQxLTMuMzA5Yy0wLjAzNS0wLjg0My0wLjY0OS0xLjc1LTEuODI1LTIu'+
			'Njk1Yy0zLjUxOS0yLjgzLTQuNTAzLTEuODMxLTYuMTM1LTAuMTc2bC0wLjMyLDAuMzIzDQoJCWMtMC43OCwwLjc4MS0yLjA0NywwLjYwOC0zLjc2Ny0wLjUxYy0xLjE5My0wLjc3Ni0yLjY2Ny0yLjAzOC00LjM3OS0zLjc1MWMtNC4yMzEtNC4yMy01LjU4NC02LjgxOS00LjI2LTguMTQ2bDAuMzE5LTAuMzE1DQoJCWMxLjY1OS0xLjYzMiwyLjY2LTIuNjE3LTAuMTcxLTYuMTM4QzcuMjQ1LDEuNjUxLDYuMzM5LDEuMDM3LDUuNDk2LDEuMDAxQzUuNDcsMSw1LjQ0NCwxLDUuNDE4LDF6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg'+
			'0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_10;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5LjczMSAyOS43MzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5LjczMSAyOS43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIGNsYXNzPSIiPjxnPjxnPgoJPHBhdGggZD0iTTIzLjg5NSwyOS43MzFjLTEuMjM3LDAtMi43MzEtMC4zMS00Lj'+
			'M3NC0wLjkzYy0zLjYwMi0xLjM1OC03LjUyMS00LjA0Mi0xMS4wMzUtNy41NTYgICBjLTMuNTE1LTMuNTE1LTYuMTk5LTcuNDM1LTcuNTU4LTExLjAzN0MtMC4zMDcsNi45MzMtMC4zMSw0LjI0NSwwLjkyMSwzLjAxNWMwLjE3Ny0wLjE3NywwLjM1Ny0wLjM2NywwLjU0My0wLjU2MyAgIGMxLjEyMy0xLjE4MSwyLjM5Mi0yLjUxLDQuMDc0LTIuNDVDNi42OTcsMC4wNSw3LjgyLDAuNzcsOC45NywyLjIwMWMzLjM5OCw0LjIyNiwxLjg2Niw1LjczMiwwLjA5Myw3LjQ3OGwtMC4zMTMsMC4zMSAgIGMtMC4yOSwwLjI5LTAuODM4LDEuNjMzLDQuMjYsNi43MzFjMS42NjQsMS42NjQsMy4wODMsMi44ODIs'+
			'NC4yMTcsMy42MTljMC43MTQsMC40NjQsMS45OTEsMS4xNjYsMi41MTUsMC42NDJsMC4zMTUtMC4zMTggICBjMS43NDQtMS43NjksMy4yNS0zLjI5Niw3LjQ3MywwLjA5OWMxLjQzMSwxLjE1LDIuMTUsMi4yNzIsMi4xOTgsMy40MzNjMC4wNjksMS42ODEtMS4yNywyLjk1My0yLjQ1Miw0LjA3NSAgIGMtMC4xOTUsMC4xODYtMC4zODUsMC4zNjYtMC41NjIsMC41NDJDMjYuMTAzLDI5LjQyNCwyNS4xMjYsMjkuNzMxLDIzLjg5NSwyOS43MzF6IE01LjQxOCwxQzQuMjIzLDEsMy4xNDQsMi4xMzYsMi4xODksMy4xNDEgICBDMS45OTcsMy4zNDMsMS44MTEsMy41MzksMS42MjgsMy43MjJDMC43MTEsNC'+
			'42MzgsMC44MDQsNy4wNDUsMS44NjQsOS44NTZjMS4zMSwzLjQ3MiwzLjkxMyw3LjI2Niw3LjMzLDEwLjY4MyAgIGMzLjQxNiwzLjQxNSw3LjIwOCw2LjAxOCwxMC42ODEsNy4zMjdjMi44MTEsMS4wNjIsNS4yMTgsMS4xNTIsNi4xMzMsMC4yMzdjMC4xODMtMC4xODMsMC4zNzktMC4zNjksMC41ODEtMC41NiAgIGMxLjAyNy0wLjk3NiwyLjE5Mi0yLjA4MiwyLjE0MS0zLjMwOWMtMC4wMzUtMC44NDMtMC42NDktMS43NS0xLjgyNS0yLjY5NWMtMy41MTktMi44My00LjUwMy0xLjgzMS02LjEzNS0wLjE3NmwtMC4zMiwwLjMyMyAgIGMtMC43OCwwLjc4MS0yLjA0NywwLjYwOC0zLjc2Ny0wLjUxYy0x'+
			'LjE5My0wLjc3Ni0yLjY2Ny0yLjAzOC00LjM3OS0zLjc1MWMtNC4yMzEtNC4yMy01LjU4NC02LjgxOS00LjI2LTguMTQ2bDAuMzE5LTAuMzE1ICAgYzEuNjU5LTEuNjMyLDIuNjYtMi42MTctMC4xNzEtNi4xMzhDNy4yNDUsMS42NTEsNi4zMzksMS4wMzcsNS40OTYsMS4wMDFDNS40NywxLDUuNDQ0LDEsNS40MTgsMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMyNjNGQzEiIGZpbGw9IiMyNzQwQzEiLz4KPC9nPjwvZz4gPC9zdmc+Cg==';
		me._svg_10__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_10;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 10";
		el.ggDx=-174;
		el.ggDy=-34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.onmouseover=function (e) {
			me._svg_10__img.style.visibility='hidden';
			me._svg_10__imgo.style.visibility='inherit';
		}
		me._svg_10.onmouseout=function (e) {
			me._svg_10__img.style.visibility='inherit';
			me._svg_10__imgo.style.visibility='hidden';
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._svg_10);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTExLjYyNiA1MTEuNjI2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuNjI2IDUxMS42MjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OS4xMDYsMTc4LjcyOWM2LjQ3Miw0LjU2NywyNS45ODEsMT'+
			'guMTMxLDU4LjUyOCw0MC42ODVjMzIuNTQ4LDIyLjU1NCw1Ny40ODIsMzkuOTIsNzQuODAzLDUyLjA5OSAgICBjMS45MDMsMS4zMzUsNS45NDYsNC4yMzcsMTIuMTMxLDguNzFjNi4xODYsNC40NzYsMTEuMzI2LDguMDkzLDE1LjQxNiwxMC44NTJjNC4wOTMsMi43NTgsOS4wNDEsNS44NTIsMTQuODQ5LDkuMjc3ICAgIGM1LjgwNiwzLjQyMiwxMS4yNzksNS45OTYsMTYuNDE4LDcuN2M1LjE0LDEuNzE4LDkuODk4LDIuNTY5LDE0LjI3NSwyLjU2OWgwLjI4N2gwLjI4OGM0LjM3NywwLDkuMTM3LTAuODUyLDE0LjI3Ny0yLjU2OSAgICBjNS4xMzctMS43MDQsMTAuNjE1LTQuMjgxLDE2LjQxNi03Ljdj'+
			'NS44MDQtMy40MjksMTAuNzUyLTYuNTIsMTQuODQ1LTkuMjc3YzQuMDkzLTIuNzU5LDkuMjI5LTYuMzc2LDE1LjQxNy0xMC44NTIgICAgYzYuMTg0LTQuNDc3LDEwLjIzMi03LjM3NSwxMi4xMzUtOC43MWMxNy41MDgtMTIuMTc5LDYyLjA1MS00My4xMSwxMzMuNjE1LTkyLjc5YzEzLjg5NC05LjcwMywyNS41MDItMjEuNDExLDM0LjgyNy0zNS4xMTYgICAgYzkuMzMyLTEzLjY5OSwxMy45OTMtMjguMDcsMTMuOTkzLTQzLjEwNWMwLTEyLjU2NC00LjUyMy0yMy4zMTktMTMuNTY1LTMyLjI2NGMtOS4wNDEtOC45NDctMTkuNzQ5LTEzLjQxOC0zMi4xMTctMTMuNDE4SDQ1LjY3OSAgICBjLTE0LjY1NS'+
			'wwLTI1LjkzMyw0Ljk0OC0zMy44MzIsMTQuODQ0QzMuOTQ5LDc5LjU2MiwwLDkxLjkzNCwwLDEwNi43NzljMCwxMS45OTEsNS4yMzYsMjQuOTg1LDE1LjcwMywzOC45NzQgICAgQzI2LjE2OSwxNTkuNzQzLDM3LjMwNywxNzAuNzM2LDQ5LjEwNiwxNzguNzI5eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQ4My4wNzIsMjA5LjI3NWMtNjIuNDI0LDQyLjI1MS0xMDkuODI0LDc1LjA4Ny0xNDIuMTc3LDk4LjUwMWMtMTAuODQ5LDcuOTkxLTE5LjY1LDE0LjIyOS0yNi40MDksMTguNjk5ICAgIGMtNi43NTksNC40'+
			'NzMtMTUuNzQ4LDkuMDQxLTI2Ljk4LDEzLjcwMmMtMTEuMjI4LDQuNjY4LTIxLjY5Miw2Ljk5NS0zMS40MDEsNi45OTVoLTAuMjkxaC0wLjI4NyAgICBjLTkuNzA3LDAtMjAuMTc3LTIuMzI3LTMxLjQwNS02Ljk5NWMtMTEuMjI4LTQuNjYxLTIwLjIyMy05LjIyOS0yNi45OC0xMy43MDJjLTYuNzU1LTQuNDctMTUuNTU5LTEwLjcwOC0yNi40MDctMTguNjk5ICAgIGMtMjUuNjk3LTE4Ljg0Mi03Mi45OTUtNTEuNjgtMTQxLjg5Ni05OC41MDFDMTcuOTg3LDIwMi4wNDcsOC4zNzUsMTkzLjc2MiwwLDE4NC40Mzd2MjI2LjY4NWMwLDEyLjU3LDQuNDcxLDIzLjMxOSwxMy40MTgsMzIuMjY1ICAgIGM4Lj'+
			'k0NSw4Ljk0OSwxOS43MDEsMTMuNDIyLDMyLjI2NCwxMy40MjJoNDIwLjI2NmMxMi41NiwwLDIzLjMxNS00LjQ3MywzMi4yNjEtMTMuNDIyYzguOTQ5LTguOTQ5LDEzLjQxOC0xOS42OTQsMTMuNDE4LTMyLjI2NSAgICBWMTg0LjQzN0M1MDMuNDQxLDE5My41NjksNDkzLjkyNywyMDEuODU0LDQ4My4wNzIsMjA5LjI3NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4K';
		me._svg_11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_11;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_11__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTExLjYyNiA1MTEuNjI2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuNjI2IDUxMS42MjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OS4xMDYsMTc4LjcyOWM2LjQ3Miw0LjU2Ny'+
			'wyNS45ODEsMTguMTMxLDU4LjUyOCw0MC42ODVjMzIuNTQ4LDIyLjU1NCw1Ny40ODIsMzkuOTIsNzQuODAzLDUyLjA5OSAgICBjMS45MDMsMS4zMzUsNS45NDYsNC4yMzcsMTIuMTMxLDguNzFjNi4xODYsNC40NzYsMTEuMzI2LDguMDkzLDE1LjQxNiwxMC44NTJjNC4wOTMsMi43NTgsOS4wNDEsNS44NTIsMTQuODQ5LDkuMjc3ICAgIGM1LjgwNiwzLjQyMiwxMS4yNzksNS45OTYsMTYuNDE4LDcuN2M1LjE0LDEuNzE4LDkuODk4LDIuNTY5LDE0LjI3NSwyLjU2OWgwLjI4N2gwLjI4OGM0LjM3NywwLDkuMTM3LTAuODUyLDE0LjI3Ny0yLjU2OSAgICBjNS4xMzctMS43MDQsMTAuNjE1LTQuMjgxLDE2'+
			'LjQxNi03LjdjNS44MDQtMy40MjksMTAuNzUyLTYuNTIsMTQuODQ1LTkuMjc3YzQuMDkzLTIuNzU5LDkuMjI5LTYuMzc2LDE1LjQxNy0xMC44NTIgICAgYzYuMTg0LTQuNDc3LDEwLjIzMi03LjM3NSwxMi4xMzUtOC43MWMxNy41MDgtMTIuMTc5LDYyLjA1MS00My4xMSwxMzMuNjE1LTkyLjc5YzEzLjg5NC05LjcwMywyNS41MDItMjEuNDExLDM0LjgyNy0zNS4xMTYgICAgYzkuMzMyLTEzLjY5OSwxMy45OTMtMjguMDcsMTMuOTkzLTQzLjEwNWMwLTEyLjU2NC00LjUyMy0yMy4zMTktMTMuNTY1LTMyLjI2NGMtOS4wNDEtOC45NDctMTkuNzQ5LTEzLjQxOC0zMi4xMTctMTMuNDE4SDQ1LjY3OSAgIC'+
			'BjLTE0LjY1NSwwLTI1LjkzMyw0Ljk0OC0zMy44MzIsMTQuODQ0QzMuOTQ5LDc5LjU2MiwwLDkxLjkzNCwwLDEwNi43NzljMCwxMS45OTEsNS4yMzYsMjQuOTg1LDE1LjcwMywzOC45NzQgICAgQzI2LjE2OSwxNTkuNzQzLDM3LjMwNywxNzAuNzM2LDQ5LjEwNiwxNzguNzI5eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzI1MzhBQyIgZmlsbD0iIzI1MzhBQSIvPgoJCTxwYXRoIGQ9Ik00ODMuMDcyLDIwOS4yNzVjLTYyLjQyNCw0Mi4yNTEtMTA5LjgyNCw3NS4wODctMTQyLjE3Nyw5OC41MDFjLTEwLjg0OSw3Ljk5MS0xOS42NSwx'+
			'NC4yMjktMjYuNDA5LDE4LjY5OSAgICBjLTYuNzU5LDQuNDczLTE1Ljc0OCw5LjA0MS0yNi45OCwxMy43MDJjLTExLjIyOCw0LjY2OC0yMS42OTIsNi45OTUtMzEuNDAxLDYuOTk1aC0wLjI5MWgtMC4yODcgICAgYy05LjcwNywwLTIwLjE3Ny0yLjMyNy0zMS40MDUtNi45OTVjLTExLjIyOC00LjY2MS0yMC4yMjMtOS4yMjktMjYuOTgtMTMuNzAyYy02Ljc1NS00LjQ3LTE1LjU1OS0xMC43MDgtMjYuNDA3LTE4LjY5OSAgICBjLTI1LjY5Ny0xOC44NDItNzIuOTk1LTUxLjY4LTE0MS44OTYtOTguNTAxQzE3Ljk4NywyMDIuMDQ3LDguMzc1LDE5My43NjIsMCwxODQuNDM3djIyNi42ODVjMCwxMi41Ny'+
			'w0LjQ3MSwyMy4zMTksMTMuNDE4LDMyLjI2NSAgICBjOC45NDUsOC45NDksMTkuNzAxLDEzLjQyMiwzMi4yNjQsMTMuNDIyaDQyMC4yNjZjMTIuNTYsMCwyMy4zMTUtNC40NzMsMzIuMjYxLTEzLjQyMmM4Ljk0OS04Ljk0OSwxMy40MTgtMTkuNjk0LDEzLjQxOC0zMi4yNjUgICAgVjE4NC40MzdDNTAzLjQ0MSwxOTMuNTY5LDQ5My45MjcsMjAxLjg1NCw0ODMuMDcyLDIwOS4yNzV6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMjUzOEFDIiBmaWxsPSIjMjUzOEFBIi8+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPgo=';
		me._svg_11__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_11;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 11";
		el.ggDx=-174;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.onmouseover=function (e) {
			me._svg_11__img.style.visibility='hidden';
			me._svg_11__imgo.style.visibility='inherit';
		}
		me._svg_11.onmouseout=function (e) {
			me._svg_11__img.style.visibility='inherit';
			me._svg_11__imgo.style.visibility='hidden';
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._svg_11);
		el=me._walkinto=document.createElement('div');
		els=me._walkinto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="walkinto";
		el.ggDx=5;
		el.ggDy=-90;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 366px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 366px;';
		hs+='height: 30px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Virtual Tour Created by Walkinto";
		el.appendChild(els);
		me._walkinto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._walkinto.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['walkinto'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._walkinto.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._walkinto.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._walkinto__text.style[domTransition]='color 0s';
				if (me._walkinto.ggCurrentLogicStateTextColor == 0) {
					me._walkinto__text.style.color="rgba(48,51,255,1)";
				}
				else {
					me._walkinto__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._walkinto.onmouseover=function (e) {
			me.elementMouseOver['walkinto']=true;
			me._walkinto.logicBlock_textcolor();
		}
		me._walkinto.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._walkinto__text)
					return;
				}
			}
			me.elementMouseOver['walkinto']=false;
			me._walkinto.logicBlock_textcolor();
		}
		me._walkinto.ontouchend=function (e) {
			me.elementMouseOver['walkinto']=false;
			me._walkinto.logicBlock_textcolor();
		}
		me._walkinto.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._walkinto);
		el=me._walkintogemailcom=document.createElement('div');
		els=me._walkintogemailcom__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="walkinto.ge@mail.com";
		el.ggDx=27;
		el.ggDy=48;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 258px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 258px;';
		hs+='height: 26px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="walkinto.ge@mail.com<br\/>";
		el.appendChild(els);
		me._walkintogemailcom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._walkintogemailcom.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['walkintogemailcom'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._walkintogemailcom.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._walkintogemailcom.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._walkintogemailcom__text.style[domTransition]='color 0s';
				if (me._walkintogemailcom.ggCurrentLogicStateTextColor == 0) {
					me._walkintogemailcom__text.style.color="rgba(48,51,255,1)";
				}
				else {
					me._walkintogemailcom__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._walkintogemailcom.onmouseover=function (e) {
			me.elementMouseOver['walkintogemailcom']=true;
			me._walkintogemailcom.logicBlock_textcolor();
		}
		me._walkintogemailcom.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._walkintogemailcom__text)
					return;
				}
			}
			me.elementMouseOver['walkintogemailcom']=false;
			me._walkintogemailcom.logicBlock_textcolor();
		}
		me._walkintogemailcom.ontouchend=function (e) {
			me.elementMouseOver['walkintogemailcom']=false;
			me._walkintogemailcom.logicBlock_textcolor();
		}
		me._walkintogemailcom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._walkintogemailcom);
		el=me._httpwalkintogelangka=document.createElement('div');
		els=me._httpwalkintogelangka__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="http:\/\/walkinto.ge\/?lang=ka";
		el.ggDx=-1;
		el.ggDy=90;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 213px;';
		hs+='height: 26px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="www.walkinto.ge";
		el.appendChild(els);
		me._httpwalkintogelangka.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._httpwalkintogelangka.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['httpwalkintogelangka'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._httpwalkintogelangka.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._httpwalkintogelangka.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._httpwalkintogelangka__text.style[domTransition]='color 0s';
				if (me._httpwalkintogelangka.ggCurrentLogicStateTextColor == 0) {
					me._httpwalkintogelangka__text.style.color="rgba(48,51,255,1)";
				}
				else {
					me._httpwalkintogelangka__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._httpwalkintogelangka.onclick=function (e) {
			player.openUrl("http:\/\/walkinto.ge\/?lang=ka","_blank");
		}
		me._httpwalkintogelangka.onmouseover=function (e) {
			me.elementMouseOver['httpwalkintogelangka']=true;
			me._httpwalkintogelangka.logicBlock_textcolor();
		}
		me._httpwalkintogelangka.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._httpwalkintogelangka__text)
					return;
				}
			}
			me.elementMouseOver['httpwalkintogelangka']=false;
			me._httpwalkintogelangka.logicBlock_textcolor();
		}
		me._httpwalkintogelangka.ontouchend=function (e) {
			me.elementMouseOver['httpwalkintogelangka']=false;
			me._httpwalkintogelangka.logicBlock_textcolor();
		}
		me._httpwalkintogelangka.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._httpwalkintogelangka);
		el=me.__574_99_76_76=document.createElement('div');
		els=me.__574_99_76_76__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="574 99 76 76";
		el.ggDx=2;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 213px;';
		hs+='height: 26px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="+995 574 99 76 76";
		el.appendChild(els);
		me.__574_99_76_76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__574_99_76_76.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['_574_99_76_76'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__574_99_76_76.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__574_99_76_76.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__574_99_76_76__text.style[domTransition]='color 0s';
				if (me.__574_99_76_76.ggCurrentLogicStateTextColor == 0) {
					me.__574_99_76_76__text.style.color="rgba(48,51,255,1)";
				}
				else {
					me.__574_99_76_76__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__574_99_76_76.onmouseover=function (e) {
			me.elementMouseOver['_574_99_76_76']=true;
			me.__574_99_76_76.logicBlock_textcolor();
		}
		me.__574_99_76_76.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__574_99_76_76__text)
					return;
				}
			}
			me.elementMouseOver['_574_99_76_76']=false;
			me.__574_99_76_76.logicBlock_textcolor();
		}
		me.__574_99_76_76.ontouchend=function (e) {
			me.elementMouseOver['_574_99_76_76']=false;
			me.__574_99_76_76.logicBlock_textcolor();
		}
		me.__574_99_76_76.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me.__574_99_76_76);
		el=me._walkintoge=document.createElement('div');
		els=me._walkintoge__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="walkinto.ge";
		el.ggDx=-31;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: 26px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Walkinto.Ge";
		el.appendChild(els);
		me._walkintoge.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._walkintoge.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				(me.elementMouseOver['walkintoge'] == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._walkintoge.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._walkintoge.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._walkintoge__text.style[domTransition]='color 0s';
				if (me._walkintoge.ggCurrentLogicStateTextColor == 0) {
					me._walkintoge__text.style.color="rgba(48,51,255,1)";
				}
				else {
					me._walkintoge__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._walkintoge.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/Walkinto.Ge\/","_blank");
		}
		me._walkintoge.onmouseover=function (e) {
			me.elementMouseOver['walkintoge']=true;
			me._walkintoge.logicBlock_textcolor();
		}
		me._walkintoge.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._walkintoge__text)
					return;
				}
			}
			me.elementMouseOver['walkintoge']=false;
			me._walkintoge.logicBlock_textcolor();
		}
		me._walkintoge.ontouchend=function (e) {
			me.elementMouseOver['walkintoge']=false;
			me._walkintoge.logicBlock_textcolor();
		}
		me._walkintoge.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._walkintoge);
		me.divSkin.appendChild(me._rectangle_1);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD'+
			'0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDQuMjM4IDQ0LjIzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQuMjM4IDQ0LjIzODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMTUuNTMzLDI5LjQ1NWMtMC4xOTIsMC0wLjM4NC0wLjA3My0wLjUzLTAuMjJjLTAuMjkzLTAuMjkzLTAuMjkzLTAuNzY5LDAtMS4wNjJsMTMuMTcxLTEzLjE3MSAgICAgYzAuMjkzLTAuMjkzLDAuNzY4LTAuMjkzLDEuMDYxLDBzMC4yOTMsMC43NjgsMCwxLjA2MUwxNi4wNjMs'+
			'MjkuMjM1QzE1LjkxNywyOS4zODIsMTUuNzI1LDI5LjQ1NSwxNS41MzMsMjkuNDU1eiIgZmlsbD0iI2M3N2MzMiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI4LjcwNCwyOS40NTVjLTAuMTkyLDAtMC4zODQtMC4wNzMtMC41My0wLjIyTDE1LjAwMiwxNi4wNjRjLTAuMjkzLTAuMjkzLTAuMjkzLTAuNzY4LDAtMS4wNjFzMC43NjgtMC4yOTMsMS4wNjEsMCAgICAgbDEzLjE3MSwxMy4xNzFjMC4yOTMsMC4yOTMsMC4yOTMsMC43NjksMCwxLjA2MkMyOS4wODgsMjkuMzgyLDI4Ljg5NiwyOS40NTUsMjguNzA0LDI5LjQ1NXoiIGZpbGw9IiNjNzdjMzIiLz4KCQk8L2c+CgkJPHBhdGggZD0iTT'+
			'IyLjExOSw0NC4yMzdDOS45MjIsNDQuMjM3LDAsMzQuMzE1LDAsMjIuMTJDMCw5LjkyNCw5LjkyMiwwLjAwMSwyMi4xMTksMC4wMDFTNDQuMjM4LDkuOTIzLDQ0LjIzOCwyMi4xMiAgICBTMzQuMzE0LDQ0LjIzNywyMi4xMTksNDQuMjM3eiBNMjIuMTE5LDEuNTAxQzEwLjc1LDEuNTAxLDEuNSwxMC43NTEsMS41LDIyLjEyczkuMjUsMjAuNjE5LDIwLjYxOSwyMC42MTkgICAgczIwLjYxOS05LjI1LDIwLjYxOS0yMC42MTlTMzMuNDg4LDEuNTAxLDIyLjExOSwxLjUwMXoiIGZpbGw9IiNjNzdjMzIiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9n'+
			'Pgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_7;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_7__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD'+
			'0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDQuMjM4IDQ0LjIzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQuMjM4IDQ0LjIzODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMTUuNTMzLDI5LjQ1NWMtMC4xOTIsMC0wLjM4NC0wLjA3My0wLjUzLTAuMjJjLTAuMjkzLTAuMjkzLTAuMjkzLTAuNzY5LDAtMS4wNjJsMTMuMTcxLTEzLjE3MSAgICAgYzAuMjkzLTAuMjkzLDAuNzY4LTAuMjkzLDEuMDYxLDBzMC4yOTMsMC43NjgsMCwxLjA2MUwxNi4wNjMs'+
			'MjkuMjM1QzE1LjkxNywyOS4zODIsMTUuNzI1LDI5LjQ1NSwxNS41MzMsMjkuNDU1eiIgZmlsbD0iI2NjNDU3MCIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI4LjcwNCwyOS40NTVjLTAuMTkyLDAtMC4zODQtMC4wNzMtMC41My0wLjIyTDE1LjAwMiwxNi4wNjRjLTAuMjkzLTAuMjkzLTAuMjkzLTAuNzY4LDAtMS4wNjFzMC43NjgtMC4yOTMsMS4wNjEsMCAgICAgbDEzLjE3MSwxMy4xNzFjMC4yOTMsMC4yOTMsMC4yOTMsMC43NjksMCwxLjA2MkMyOS4wODgsMjkuMzgyLDI4Ljg5NiwyOS40NTUsMjguNzA0LDI5LjQ1NXoiIGZpbGw9IiNjYzQ1NzAiLz4KCQk8L2c+CgkJPHBhdGggZD0iTT'+
			'IyLjExOSw0NC4yMzdDOS45MjIsNDQuMjM3LDAsMzQuMzE1LDAsMjIuMTJDMCw5LjkyNCw5LjkyMiwwLjAwMSwyMi4xMTksMC4wMDFTNDQuMjM4LDkuOTIzLDQ0LjIzOCwyMi4xMiAgICBTMzQuMzE0LDQ0LjIzNywyMi4xMTksNDQuMjM3eiBNMjIuMTE5LDEuNTAxQzEwLjc1LDEuNTAxLDEuNSwxMC43NTEsMS41LDIyLjEyczkuMjUsMjAuNjE5LDIwLjYxOSwyMC42MTkgICAgczIwLjYxOS05LjI1LDIwLjYxOS0yMC42MTlTMzMuNDg4LDEuNTAxLDIyLjExOSwxLjUwMXoiIGZpbGw9IiNjYzQ1NzAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9n'+
			'Pgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
		me._svg_7__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_7;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 7";
		el.ggDx=219;
		el.ggDy=-114;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_7.onclick=function (e) {
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.style.visibility='hidden';
			me._rectangle_1.ggVisible=false;
			me._svg_7.style[domTransition]='none';
			me._svg_7.style.visibility='hidden';
			me._svg_7.ggVisible=false;
		}
		me._svg_7.onmouseover=function (e) {
			me._svg_7__img.style.visibility='hidden';
			me._svg_7__imgo.style.visibility='inherit';
		}
		me._svg_7.onmouseout=function (e) {
			me._svg_7__img.style.visibility='inherit';
			me._svg_7__imgo.style.visibility='hidden';
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_7);
		el=me._menu_button=document.createElement('div');
		els=me._menu_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTE0LjAwMDAwMHB0IiBoZWlnaHQ9IjI3LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTE0LjAwMDAwMCAyNy4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdG'+
			'VkIGJ5IHBvdHJhY2UgMS4xNSwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTcKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMjcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8L2c+Cjwvc3ZnPgo=';
		me._menu_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;menu_button;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._menu_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTE0LjAwMDAwMHB0IiBoZWlnaHQ9IjI3LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTE0LjAwMDAwMCAyNy4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdG'+
			'VkIGJ5IHBvdHJhY2UgMS4xNSwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTcKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMjcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8L2c+Cjwvc3ZnPgo=';
		me._menu_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;menu_button;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="menu_button";
		el.ggDx=48;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 2128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_button.onmouseover=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			if (player.transitionsDisabled) {
				me._scrollarea_1.style[domTransition]='none';
			} else {
				me._scrollarea_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._scrollarea_1.ggParameter.rx=0;me._scrollarea_1.ggParameter.ry=0;
			me._scrollarea_1.style[domTransform]=parameterToTransform(me._scrollarea_1.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_2.style[domTransition]='none';
			} else {
				me._svg_2.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_2.ggParameter.rx=0;me._svg_2.ggParameter.ry=0;
			me._svg_2.style[domTransform]=parameterToTransform(me._svg_2.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_4.style[domTransition]='none';
			} else {
				me._svg_4.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_4.ggParameter.rx=0;me._svg_4.ggParameter.ry=0;
			me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_3.style[domTransition]='none';
			} else {
				me._svg_3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_3.ggParameter.rx=0;me._svg_3.ggParameter.ry=0;
			me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=0;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_1.style[domTransition]='none';
			} else {
				me._svg_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_1.ggParameter.rx=0;me._svg_1.ggParameter.ry=0;
			me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
			if (player.transitionsDisabled) {
				me._button_zoom.style[domTransition]='none';
			} else {
				me._button_zoom.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._button_zoom.ggParameter.rx=0;me._button_zoom.ggParameter.ry=0;
			me._button_zoom.style[domTransform]=parameterToTransform(me._button_zoom.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_12.style[domTransition]='none';
			} else {
				me._svg_12.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._svg_12.ggParameter.rx=0;me._svg_12.ggParameter.ry=0;
			me._svg_12.style[domTransform]=parameterToTransform(me._svg_12.ggParameter);
			if (player.transitionsDisabled) {
				me._thumbnail_show_button_show.style[domTransition]='none';
			} else {
				me._thumbnail_show_button_show.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._thumbnail_show_button_show.ggParameter.rx=0;me._thumbnail_show_button_show.ggParameter.ry=0;
			me._thumbnail_show_button_show.style[domTransform]=parameterToTransform(me._thumbnail_show_button_show.ggParameter);
			me._menu_button__img.style.visibility='hidden';
			me._menu_button__imgo.style.visibility='inherit';
		}
		me._menu_button.onmouseout=function (e) {
			me._menu_button__img.style.visibility='inherit';
			me._menu_button__imgo.style.visibility='hidden';
		}
		me._menu_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=5000;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='0';
			me._menu_button.style.visibility='hidden';
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='1';
			me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._scrollarea_1.style[domTransition]='none';
			} else {
				me._scrollarea_1.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._scrollarea_1.ggParameter.rx=0;me._scrollarea_1.ggParameter.ry=54;
			me._scrollarea_1.style[domTransform]=parameterToTransform(me._scrollarea_1.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_2.style[domTransition]='none';
			} else {
				me._svg_2.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._svg_2.ggParameter.rx=0;me._svg_2.ggParameter.ry=54;
			me._svg_2.style[domTransform]=parameterToTransform(me._svg_2.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_4.style[domTransition]='none';
			} else {
				me._svg_4.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._svg_4.ggParameter.rx=0;me._svg_4.ggParameter.ry=54;
			me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_3.style[domTransition]='none';
			} else {
				me._svg_3.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._svg_3.ggParameter.rx=0;me._svg_3.ggParameter.ry=54;
			me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._map.ggParameter.rx=0;me._map.ggParameter.ry=54;
			me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_1.style[domTransition]='none';
			} else {
				me._svg_1.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._svg_1.ggParameter.rx=0;me._svg_1.ggParameter.ry=54;
			me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
			if (player.transitionsDisabled) {
				me._button_zoom.style[domTransition]='none';
			} else {
				me._button_zoom.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._button_zoom.ggParameter.rx=0;me._button_zoom.ggParameter.ry=54;
			me._button_zoom.style[domTransform]=parameterToTransform(me._button_zoom.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_12.style[domTransition]='none';
			} else {
				me._svg_12.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._svg_12.ggParameter.rx=0;me._svg_12.ggParameter.ry=54;
			me._svg_12.style[domTransform]=parameterToTransform(me._svg_12.ggParameter);
			if (player.transitionsDisabled) {
				me._thumbnail_show_button_show.style[domTransition]='none';
			} else {
				me._thumbnail_show_button_show.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._thumbnail_show_button_show.ggParameter.rx=0;me._thumbnail_show_button_show.ggParameter.ry=54;
			me._thumbnail_show_button_show.style[domTransform]=parameterToTransform(me._thumbnail_show_button_show.ggParameter);
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_button.appendChild(me._hide_timer);
		me.divSkin.appendChild(me._menu_button);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk3IDAgMCAwLjk5OTcgMC4wMTM0OTg2IDAuMDEzNDk4NikiPjxnPgoJPHBhdG'+
			'ggaWQ9IldpbmRvd3MiIGQ9Ik0xOC4zNzMsOC40ODFDMjQuMDQzLDYuMjIsMjkuMDE3LDUuMDg0LDMzLjU2OSw1YzIuMzksMCw0LjY0NiwwLjI1Nyw2Ljc4NSwwLjc1NCAgIGMzLjI1NiwwLjgzMSw3Ljc2MiwzLjI3MSw5LjQ3OSw0LjI1MWwtOC4xNTIsMjcuNzU5Yy00LjE1NC0yLjY0OS05LjE2Ny01LjIyMi0xNS45NDYtNS4yOTFoLTAuMDA2ICAgYy00LjUyMSwwLTkuNDMzLDEuMDQxLTE1LjEyNSwzLjE3OEwxOC4zNzMsOC40ODF6IE0zMS4xNCw3NS4wNTJjMi4wMTYtNi44MTUsNi44NTctMjMuMjc0LDguMzAyLTI4LjE5NCAgIGMtMS4wNDgtMC42MzctMi4xMTYtMS4yNzQtMy4yMDktMS44NjRj'+
			'LTQuMTk1LTIuMTQ1LTguMjcxLTMuMjMyLTEyLjEyLTMuMjMyYy0wLjUyMiwwLTEuMDQ2LDAuMDE2LTEuNTc2LDAuMDYyICAgYy00LjkxMiwwLjQwNC05LjM5NSwxLjY5NS0xMi4yODMsMi42OTdjLTAuNzY2LDAuMjc5LTEuNTQ2LDAuNTc0LTIuMzU3LDAuOTAxTDAsNzIuNjU4YzUuNDI3LTEuOTk4LDEwLjIyMi0yLjk2OSwxNC42MTctMi45NjkgICBDMjEuNzIzLDY5LjY4OSwyNi44NzcsNzIuMzMyLDMxLjE0LDc1LjA1MnogTTc5LjIxNiw1NC43NTNjLTUuMTUzLDEuNjU1LTEwLjA5NiwyLjQ5NC0xNC43MTksMi40OTQgICBjLTguNDMzLDAtMTQuMzM3LTIuNzItMTguMDYyLTUuMzMxbC03Ljk0OC'+
			'wyNy40OEM0MC44NDYsODAuNzQsNDguNzc3LDg1LDU0Ljg1NCw4NWM0LjkwNCwwLDEwLjM5NC0xLjI1MiwxNi43NzItMy44MzIgICBMNzkuMjE2LDU0Ljc1M3ogTTkwLDE3LjU0M2MtNS4xNywxLjk5OC0xMC4yMTQsMy4wMTYtMTUuMDMyLDMuMDE2Yy04LjA1OCwwLTE0LTIuNzgxLTE3Ljg1LTUuNDU1TDQ5LjAzNiw0Mi45NCAgIGM1LjQyOCwzLjQ3NCwxMS4yNzYsNS4yMzcsMTcuNDE0LDUuMjM3YzUuMDA1LDAsMTAuMTg4LTEuMTk2LDE1LjQyMS0zLjU1OWwtMC4wMTYtMC4xOTNsMC4zMjgtMC4wNzlMOTAsMTcuNTQzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRo'+
			'IiBkYXRhLW9sZF9jb2xvcj0iI0Y5RjlGNSIgZmlsbD0iI0ZDRkNGQiIvPgo8L2c+PC9nPiA8L3N2Zz4K';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_show_button_show;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk3IDAgMCAwLjk5OTcgMC4wMTM0OTg2IDAuMDEzNDk4NikiPjxnPgoJPHBhdG'+
			'ggaWQ9IldpbmRvd3MiIGQ9Ik0xOC4zNzMsOC40ODFDMjQuMDQzLDYuMjIsMjkuMDE3LDUuMDg0LDMzLjU2OSw1YzIuMzksMCw0LjY0NiwwLjI1Nyw2Ljc4NSwwLjc1NCAgIGMzLjI1NiwwLjgzMSw3Ljc2MiwzLjI3MSw5LjQ3OSw0LjI1MWwtOC4xNTIsMjcuNzU5Yy00LjE1NC0yLjY0OS05LjE2Ny01LjIyMi0xNS45NDYtNS4yOTFoLTAuMDA2ICAgYy00LjUyMSwwLTkuNDMzLDEuMDQxLTE1LjEyNSwzLjE3OEwxOC4zNzMsOC40ODF6IE0zMS4xNCw3NS4wNTJjMi4wMTYtNi44MTUsNi44NTctMjMuMjc0LDguMzAyLTI4LjE5NCAgIGMtMS4wNDgtMC42MzctMi4xMTYtMS4yNzQtMy4yMDktMS44NjRj'+
			'LTQuMTk1LTIuMTQ1LTguMjcxLTMuMjMyLTEyLjEyLTMuMjMyYy0wLjUyMiwwLTEuMDQ2LDAuMDE2LTEuNTc2LDAuMDYyICAgYy00LjkxMiwwLjQwNC05LjM5NSwxLjY5NS0xMi4yODMsMi42OTdjLTAuNzY2LDAuMjc5LTEuNTQ2LDAuNTc0LTIuMzU3LDAuOTAxTDAsNzIuNjU4YzUuNDI3LTEuOTk4LDEwLjIyMi0yLjk2OSwxNC42MTctMi45NjkgICBDMjEuNzIzLDY5LjY4OSwyNi44NzcsNzIuMzMyLDMxLjE0LDc1LjA1MnogTTc5LjIxNiw1NC43NTNjLTUuMTUzLDEuNjU1LTEwLjA5NiwyLjQ5NC0xNC43MTksMi40OTQgICBjLTguNDMzLDAtMTQuMzM3LTIuNzItMTguMDYyLTUuMzMxbC03Ljk0OC'+
			'wyNy40OEM0MC44NDYsODAuNzQsNDguNzc3LDg1LDU0Ljg1NCw4NWM0LjkwNCwwLDEwLjM5NC0xLjI1MiwxNi43NzItMy44MzIgICBMNzkuMjE2LDU0Ljc1M3ogTTkwLDE3LjU0M2MtNS4xNywxLjk5OC0xMC4yMTQsMy4wMTYtMTUuMDMyLDMuMDE2Yy04LjA1OCwwLTE0LTIuNzgxLTE3Ljg1LTUuNDU1TDQ5LjAzNiw0Mi45NCAgIGM1LjQyOCwzLjQ3NCwxMS4yNzYsNS4yMzcsMTcuNDE0LDUuMjM3YzUuMDA1LDAsMTAuMTg4LTEuMTk2LDE1LjQyMS0zLjU1OWwtMC4wMTYtMC4xOTNsMC4zMjgtMC4wNzlMOTAsMTcuNTQzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRo'+
			'IiBkYXRhLW9sZF9jb2xvcj0iIzlDNTQ1NCIgZmlsbD0iIzlCNTM1MyIvPgo8L2c+PC9nPiA8L3N2Zz4K';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;thumbnail_show_button_show;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 143px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
			var flag=me._arrows.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._arrows.style[domTransition]='none';
			} else {
				me._arrows.style[domTransition]='all 400ms ease-out 0ms';
			}
			if (flag) {
				me._arrows.style.opacity='1';
				me._arrows.style.visibility=me._arrows.ggVisible?'inherit':'hidden';
			} else {
				me._arrows.style.opacity='0';
				me._arrows.style.visibility='hidden';
			}
			me._arrows.ggOpacitiyActive=!flag;
		}
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_show_button_show);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 100px;';
		hs+='left : 50%;';
		hs+='margin-left : -191px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 382px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 512px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 512px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 65px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu.style.bottom='80px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu.ggDx=0;
					me._thumbnail_menu.style.bottom='65px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var clientWidthWithScale = this.getBoundingClientRect().width;
				var clientHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = 382;
				var contentHeight = 100;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = clientWidthWithScale;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > clientWidthWithScale) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu_horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.clientWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._arrows=document.createElement('div');
		el.ggId="arrows";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -15px;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._arrows.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._arrows.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_previews=document.createElement('div');
		els=me._svg_previews__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNi'+
			'AxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiIGZpbGw9IiNjNDU5MGMiLz4KICA8L2c+Cjwvc3ZnPgo=';
		me._svg_previews__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_previews;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_previews__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDQuMjM4IDQ0LjIzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQuMjM4IDQ0LjIzODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTIyLjExOSw0NC4yMzdDOS45MjIsNDQuMjM3LDAsMz'+
			'QuMzE1LDAsMjIuMTE5UzkuOTIyLDAuMDAxLDIyLjExOSwwLjAwMXMyMi4xMTksOS45MjIsMjIuMTE5LDIyLjExOCAgICBTMzQuMzE0LDQ0LjIzNywyMi4xMTksNDQuMjM3eiBNMjIuMTE5LDEuNTAxQzEwLjc1LDEuNTAxLDEuNSwxMC43NSwxLjUsMjIuMTE5YzAsMTEuMzY4LDkuMjUsMjAuNjE4LDIwLjYxOSwyMC42MTggICAgczIwLjYxOS05LjI1LDIwLjYxOS0yMC42MThDNDIuNzM4LDEwLjc1LDMzLjQ4OCwxLjUwMSwyMi4xMTksMS41MDF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRjZGMEYwIiBmaWxsPSIjRkRGQkZCIi8+'+
			'CgkJPHBhdGggZD0iTTI0LjY2NywyOS44ODRjLTAuMTkyLDAtMC4zODQtMC4wNzItMC41My0wLjIybC03LjMyOC03LjMzNGMtMC4yOTItMC4yOTMtMC4yOTItMC43NjgsMC0xLjA2MWw3LjMyOC03LjMzMyAgICBjMC4yOTMtMC4yOTMsMC43NjgtMC4yOTMsMS4wNjEsMHMwLjI5MywwLjc2OCwwLDEuMDYxTDE4LjQsMjEuOGw2Ljc5OCw2LjgwNWMwLjI5MiwwLjI5MywwLjI5MiwwLjc2OSwwLDEuMDYxICAgIEMyNS4wNTEsMjkuODEyLDI0Ljg1OSwyOS44ODQsMjQuNjY3LDI5Ljg4NHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNGNk'+
			'YwRjAiIGZpbGw9IiNGREZCRkIiLz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+Cg==';
		me._svg_previews__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_previews;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg previews";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 119px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -160px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_previews.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_previews.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_cloner.style[domTransition]='none';
			} else {
				me._thumbnail_cloner.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._thumbnail_cloner.ggParameter.rx+=385;me._thumbnail_cloner.ggParameter.ry+=0;
			if (me._thumbnail_cloner.ggParameter.rx>0) me._thumbnail_cloner.ggParameter.rx=0;
			me._thumbnail_cloner.style[domTransform]=parameterToTransform(me._thumbnail_cloner.ggParameter);
		}
		me._svg_previews.onmouseover=function (e) {
			me._svg_previews__img.style.visibility='hidden';
			me._svg_previews__imgo.style.visibility='inherit';
		}
		me._svg_previews.onmouseout=function (e) {
			me._svg_previews__img.style.visibility='inherit';
			me._svg_previews__imgo.style.visibility='hidden';
		}
		me._svg_previews.ggUpdatePosition=function (useTransition) {
		}
		me._arrows.appendChild(me._svg_previews);
		el=me._svg_next=document.createElement('div');
		els=me._svg_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPHBhdGggZD0ibTQwLjQsMTIxLjNjLTAuOCwwLjgtMS44LDEuMi0yLjksMS4ycy0yLjEtMC40LTIuOS0xLjJjLTEuNi0xLjYtMS42LTQuMiAwLTUuOGw1MS01MS01MS01MWMtMS42LT'+
			'EuNi0xLjYtNC4yIDAtNS44IDEuNi0xLjYgNC4yLTEuNiA1LjgsMGw1My45LDUzLjljMS42LDEuNiAxLjYsNC4yIDAsNS44bC01My45LDUzLjl6IiBmaWxsPSIjYzQ1OTBjIi8+CiAgPC9nPgo8L3N2Zz4K';
		me._svg_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_next;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDQuMjM2IDQ0LjIzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQuMjM2IDQ0LjIzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTIyLjExOCw0NC4yMzZDOS45MjIsNDQuMjM2LDAsMzQuMzE0LDAsMj'+
			'IuMTE4UzkuOTIyLDAsMjIuMTE4LDBzMjIuMTE4LDkuOTIyLDIyLjExOCwyMi4xMThTMzQuMzE0LDQ0LjIzNiwyMi4xMTgsNDQuMjM2ICAgIHogTTIyLjExOCwxLjVDMTAuNzUsMS41LDEuNSwxMC43NDksMS41LDIyLjExOGMwLDExLjM2OCw5LjI1LDIwLjYxOCwyMC42MTgsMjAuNjE4YzExLjM3LDAsMjAuNjE4LTkuMjUsMjAuNjE4LTIwLjYxOCAgICBDNDIuNzM2LDEwLjc0OSwzMy40ODgsMS41LDIyLjExOCwxLjV6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkJGN0Y3IiBmaWxsPSIjRkZGRUZFIi8+CgkJPHBhdGggZD0iTTE5'+
			'LjM0MSwyOS44ODRjLTAuMTkyLDAtMC4zODQtMC4wNzMtMC41My0wLjIyYy0wLjI5My0wLjI5Mi0wLjI5My0wLjc2OCwwLTEuMDYxbDYuNzk2LTYuODA0bC02Ljc5Ni02LjgwMyAgICBjLTAuMjkyLTAuMjkzLTAuMjkyLTAuNzY5LDAtMS4wNjFjMC4yOTMtMC4yOTMsMC43NjgtMC4yOTMsMS4wNjEsMGw3LjMyNSw3LjMzM2MwLjI5MywwLjI5MywwLjI5MywwLjc2OCwwLDEuMDYxbC03LjMyNSw3LjMzMyAgICBDMTkuNzI1LDI5LjgxMSwxOS41MzMsMjkuODg0LDE5LjM0MSwyOS44ODR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRk'+
			'JGN0Y3IiBmaWxsPSIjRkZGRUZFIi8+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPgo=';
		me._svg_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_next;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 119px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : -155px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_next.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_cloner.style[domTransition]='none';
			} else {
				me._thumbnail_cloner.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._thumbnail_cloner.ggParameter.rx+=-385;me._thumbnail_cloner.ggParameter.ry+=0;
			if (me._thumbnail_cloner.ggParameter.rx<-1440) me._thumbnail_cloner.ggParameter.rx=-1440;
			me._thumbnail_cloner.style[domTransform]=parameterToTransform(me._thumbnail_cloner.ggParameter);
		}
		me._svg_next.onmouseover=function (e) {
			me._svg_next__img.style.visibility='hidden';
			me._svg_next__imgo.style.visibility='inherit';
		}
		me._svg_next.onmouseout=function (e) {
			me._svg_next__img.style.visibility='inherit';
			me._svg_next__imgo.style.visibility='hidden';
		}
		me._svg_next.ggUpdatePosition=function (useTransition) {
		}
		me._arrows.appendChild(me._svg_next);
		el=me._close_thumbnail_menu_=document.createElement('div');
		els=me._close_thumbnail_menu___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Close Thumbnail Menu ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 76px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 244px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 244px;';
		hs+='height: 32px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 1px 8px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Close Thumbnail Menu ";
		el.appendChild(els);
		me._close_thumbnail_menu_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_thumbnail_menu_.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
			var flag=me._arrows.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._arrows.style[domTransition]='none';
			} else {
				me._arrows.style[domTransition]='all 400ms ease-out 0ms';
			}
			if (flag) {
				me._arrows.style.opacity='1';
				me._arrows.style.visibility=me._arrows.ggVisible?'inherit':'hidden';
			} else {
				me._arrows.style.opacity='0';
				me._arrows.style.visibility='hidden';
			}
			me._arrows.ggOpacitiyActive=!flag;
		}
		me._close_thumbnail_menu_.onmouseover=function (e) {
			me.elementMouseOver['close_thumbnail_menu_']=true;
		}
		me._close_thumbnail_menu_.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._close_thumbnail_menu___text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._close_thumbnail_menu_.style[domTransition]='none';
			} else {
				me._close_thumbnail_menu_.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._close_thumbnail_menu_.ggParameter.sx=1;me._close_thumbnail_menu_.ggParameter.sy=1;
			me._close_thumbnail_menu_.style[domTransform]=parameterToTransform(me._close_thumbnail_menu_.ggParameter);
			me.elementMouseOver['close_thumbnail_menu_']=false;
		}
		me._close_thumbnail_menu_.ontouchend=function (e) {
			me.elementMouseOver['close_thumbnail_menu_']=false;
		}
		me._close_thumbnail_menu_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._arrows.appendChild(me._close_thumbnail_menu_);
		me.divSkin.appendChild(me._arrows);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._scrollarea_1.ggUpdatePosition();
			me._thumbnail_menu.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['book_a_table']) {
			if (player.transitionsDisabled) {
				me._book_a_table.style[domTransition]='none';
			} else {
				me._book_a_table.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._book_a_table.ggParameter.sx=1.05;me._book_a_table.ggParameter.sy=1.05;
			me._book_a_table.style[domTransform]=parameterToTransform(me._book_a_table.ggParameter);
		}
		if (me.elementMouseOver['contact']) {
			if (player.transitionsDisabled) {
				me._contact.style[domTransition]='none';
			} else {
				me._contact.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._contact.ggParameter.sx=1.05;me._contact.ggParameter.sy=1.05;
			me._contact.style[domTransform]=parameterToTransform(me._contact.ggParameter);
		}
		if (me.elementMouseOver['entrance']) {
			if (player.transitionsDisabled) {
				me._entrance.style[domTransition]='none';
			} else {
				me._entrance.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._entrance.ggParameter.sx=1.05;me._entrance.ggParameter.sy=1.05;
			me._entrance.style[domTransform]=parameterToTransform(me._entrance.ggParameter);
		}
		if (me.elementMouseOver['lobby']) {
			if (player.transitionsDisabled) {
				me._lobby.style[domTransition]='none';
			} else {
				me._lobby.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._lobby.ggParameter.sx=1.05;me._lobby.ggParameter.sy=1.05;
			me._lobby.style[domTransform]=parameterToTransform(me._lobby.ggParameter);
		}
		if (me.elementMouseOver['apartment']) {
			if (player.transitionsDisabled) {
				me._apartment.style[domTransition]='none';
			} else {
				me._apartment.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._apartment.ggParameter.sx=1.05;me._apartment.ggParameter.sy=1.05;
			me._apartment.style[domTransform]=parameterToTransform(me._apartment.ggParameter);
		}
		if (me.elementMouseOver['mirror_hall']) {
			if (player.transitionsDisabled) {
				me._mirror_hall.style[domTransition]='none';
			} else {
				me._mirror_hall.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._mirror_hall.ggParameter.sx=1.05;me._mirror_hall.ggParameter.sy=1.05;
			me._mirror_hall.style[domTransform]=parameterToTransform(me._mirror_hall.ggParameter);
		}
		if (me.elementMouseOver['the_bronze_hall']) {
			if (player.transitionsDisabled) {
				me._the_bronze_hall.style[domTransition]='none';
			} else {
				me._the_bronze_hall.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._the_bronze_hall.ggParameter.sx=1.05;me._the_bronze_hall.ggParameter.sy=1.05;
			me._the_bronze_hall.style[domTransform]=parameterToTransform(me._the_bronze_hall.ggParameter);
		}
		if (me.elementMouseOver['terrace']) {
			if (player.transitionsDisabled) {
				me._terrace.style[domTransition]='none';
			} else {
				me._terrace.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._terrace.ggParameter.sx=1.05;me._terrace.ggParameter.sy=1.05;
			me._terrace.style[domTransform]=parameterToTransform(me._terrace.ggParameter);
		}
		if (me.elementMouseOver['library']) {
			if (player.transitionsDisabled) {
				me._library.style[domTransition]='none';
			} else {
				me._library.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._library.ggParameter.sx=1.05;me._library.ggParameter.sy=1.05;
			me._library.style[domTransform]=parameterToTransform(me._library.ggParameter);
		}
		if (me.elementMouseOver['lodge']) {
			if (player.transitionsDisabled) {
				me._lodge.style[domTransition]='none';
			} else {
				me._lodge.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._lodge.ggParameter.sx=1.05;me._lodge.ggParameter.sy=1.05;
			me._lodge.style[domTransform]=parameterToTransform(me._lodge.ggParameter);
		}
		if (me.elementMouseOver['balcony']) {
			if (player.transitionsDisabled) {
				me._balcony.style[domTransition]='none';
			} else {
				me._balcony.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._balcony.ggParameter.sx=1.05;me._balcony.ggParameter.sy=1.05;
			me._balcony.style[domTransform]=parameterToTransform(me._balcony.ggParameter);
		}
		if (me.elementMouseOver['wardrobe']) {
			if (player.transitionsDisabled) {
				me._wardrobe.style[domTransition]='none';
			} else {
				me._wardrobe.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._wardrobe.ggParameter.sx=1.05;me._wardrobe.ggParameter.sy=1.05;
			me._wardrobe.style[domTransform]=parameterToTransform(me._wardrobe.ggParameter);
		}
		if (me.elementMouseOver['yard']) {
			if (player.transitionsDisabled) {
				me._yard.style[domTransition]='none';
			} else {
				me._yard.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._yard.ggParameter.sx=1.05;me._yard.ggParameter.sy=1.05;
			me._yard.style[domTransform]=parameterToTransform(me._yard.ggParameter);
		}
		if (me.elementMouseDown['button_image_right']) {
			player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			player.changePanLog(1,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='0';
				me._menu_button.style.visibility='hidden';
			} else {
				if (player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='1';
				me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._scrollarea_1.style[domTransition]='none';
				} else {
					me._scrollarea_1.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._scrollarea_1.ggParameter.rx=0;me._scrollarea_1.ggParameter.ry=54;
				me._scrollarea_1.style[domTransform]=parameterToTransform(me._scrollarea_1.ggParameter);
				if (player.transitionsDisabled) {
					me._svg_2.style[domTransition]='none';
				} else {
					me._svg_2.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._svg_2.ggParameter.rx=0;me._svg_2.ggParameter.ry=54;
				me._svg_2.style[domTransform]=parameterToTransform(me._svg_2.ggParameter);
				if (player.transitionsDisabled) {
					me._svg_4.style[domTransition]='none';
				} else {
					me._svg_4.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._svg_4.ggParameter.rx=0;me._svg_4.ggParameter.ry=54;
				me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
				if (player.transitionsDisabled) {
					me._svg_3.style[domTransition]='none';
				} else {
					me._svg_3.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._svg_3.ggParameter.rx=0;me._svg_3.ggParameter.ry=54;
				me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
				if (player.transitionsDisabled) {
					me._map.style[domTransition]='none';
				} else {
					me._map.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._map.ggParameter.rx=0;me._map.ggParameter.ry=54;
				me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
				if (player.transitionsDisabled) {
					me._svg_1.style[domTransition]='none';
				} else {
					me._svg_1.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._svg_1.ggParameter.rx=0;me._svg_1.ggParameter.ry=54;
				me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				if (player.transitionsDisabled) {
					me._button_zoom.style[domTransition]='none';
				} else {
					me._button_zoom.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._button_zoom.ggParameter.rx=0;me._button_zoom.ggParameter.ry=54;
				me._button_zoom.style[domTransform]=parameterToTransform(me._button_zoom.ggParameter);
				if (player.transitionsDisabled) {
					me._svg_12.style[domTransition]='none';
				} else {
					me._svg_12.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._svg_12.ggParameter.rx=0;me._svg_12.ggParameter.ry=54;
				me._svg_12.style[domTransform]=parameterToTransform(me._svg_12.ggParameter);
				if (player.transitionsDisabled) {
					me._thumbnail_show_button_show.style[domTransition]='none';
				} else {
					me._thumbnail_show_button_show.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._thumbnail_show_button_show.ggParameter.rx=0;me._thumbnail_show_button_show.ggParameter.ry=54;
				me._thumbnail_show_button_show.style[domTransform]=parameterToTransform(me._thumbnail_show_button_show.ggParameter);
			}
		}
		if (me.elementMouseOver['close_thumbnail_menu_']) {
			if (player.transitionsDisabled) {
				me._close_thumbnail_menu_.style[domTransition]='none';
			} else {
				me._close_thumbnail_menu_.style[domTransition]='all 100ms ease-out 0ms';
			}
			me._close_thumbnail_menu_.ggParameter.sx=1.05;me._close_thumbnail_menu_.ggParameter.sy=1.05;
			me._close_thumbnail_menu_.style[domTransform]=parameterToTransform(me._close_thumbnail_menu_.ggParameter);
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(1,true);
					break;
				case 38:
					player.changeTiltLog(1,true);
					break;
				case 39:
					player.changePanLog(-1,true);
					break;
				case 40:
					player.changeTiltLog(-1,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMTJweCIgdmlld0JveD0iMCAwIDEyOCAxMTIiIGVuYWJsZS'+
			'1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTEyIiB4PSIwIiB5PSIwIgogICAgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUJ3Q0FRQUFBQjhwYkJaQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFKY0VoWgpjd0FBRHNNQUFBN0RBY2R2cUdRQUFCbE9TVVJCVkhqYTVWMTVi'+
			'RnpIZWYvTnZHc3Y3cExMUXp4RmlvY09pcnBzeTNac1dZNlBPSzdqCnhFMlFPSW1kdzdWck5DalNwR2phSm0zYUluQ2JHa2lQcEdsNklHaUJGbWphRkEyS0pxZ0ROMDNUTkxialU1WXRTN0pGVWlJcGlhUW8KY3NtOTNyNTdwbis4WTk4dUQzR1hwT1MwczFpK2ZmdU9uZTgzMy8zTlBBTC96eHU1UnI5SnZMOXU0MVh2LzdNQUVCQVEwTkNMZ0lDRApWYno0MVFUaGFnSkFRQ0dBUW9RQUFZSzNCVGdjMkxCaHc0RUR4NFBoS2pYeHFoSHZraTlBZ2dnSkVpU0lWRllpaE5xV3FjR0NDY3VECndZWURBbloxK09EcUFPQVRMM3JFSzVERmFIL3YwSTc3anlTaUo4OSs3My9PVFJwRldEQmhnb0o2dkhCVitHRHJSY0'+
			'FmZTU5NEdUS1UKcHBaYnJ2dXRUKzdwYTB4UXFobW5KLzdsdi83dWUvTnpUSWNCRTViSEM0Nm5FYmEwQ1Z0TVBnV3RJRDJDaUJEdjYvL1ZoMy9uMGQxOQpzUWdoZ0NSMnR0dzAwdE94V0xxNHdBbjhsMjhwdHRndWJDVUFaYWwzMlY1QkZKR0dsanR2L2JQUFBYQmJVd01KY1o4aTdSODhQQ3hFCkppK3JobWNicUVmK0Z2UG8xZ0ZBS3NaZVFRUVJNZEhkKzl1UC9mcER3MzJ5QkE0R0d5WWNjQkFRUWxvYmI5blgzbjVKbTE5aVBDQSsKN0MzOFRBSGdTcjAvOWhGRVNMU2grZDdiLytpejc3MjF0WkVRTUc1bzJYT1hYNTJieTlwbUhJSUFTa2hFSHVtL2VkL3MwblRHY2dJZQpJQlh1MHM4RUFLUkM1U2xRRUJF'+
			'VGZUdSsrSXVmK2ZEK0FWa0NoMjBWenN6OHpkbXZqdi9kMUZPWGZwSjF6RTRhRTRrQUt0QnRxWnRICnV0dlBUQmQwQnBDSzE1YTB6UWFBaE1aZTlzYytubjdnN2kvOTBnTzMrV09mVy9qKzVKZkgvbmx5WWk2Zld5cE01bDh1ekdvZHJGa1MKUlZCQ0doUDdCdy91THRtVDh6WUx2TVdmRVFCOGF4OGFleUhSUC9DRlgvak1nd2VISk5FZCs5R1piNHgvN2V5Sldhc0FDdzRjV01YUwpxY0pyYXR6cGxpSWlFVUFrY1VmSGpYczd0NDFmeW1rY25qQ0VPV0VUaFdIekFBanJmTS9na1ZpczZZUDMvdFlqSDdxek9VVUlISzVsCk0wOU4vTUhZdjAzTlo3Z0c1bEhDNFRqbVRPa2xWVFU3U0pOSUJaY1BEdTBhN25mST'+
			'JVczJCd0VGUEJnMldTbHVGZ0MremhkZFJ3Y0sKSWlRMnRQTlhQL2E1aHc3dUZBVndXSGJ1ek14Zm5QM3EyVGRtelFLeENTOGJld0xDWWVmMTQ4WFRwYVRUU1JTUmlDQ2lNTkI5ODBoVAowL21GeFdKZ0dDdlY0dHNFZ0xEY0s1N2tSK05OSDNqM0Z4OTk2SjdHQkFFWTlLV0ZwODQrY2VaZnp5OHVjaDBPV1hZTEFJNWxUaFNmCnp5OXAzYlJKb2lJb0ljbjR6WHVIK3kwK01XZXhJSmJjVkx1d2NRQ3E3YjJDS0lrTjcvN1VnNS8vK1A0QlFYRGwvczNaYjR4LzdkeXAKT2F2SXJYQzN3eFJ3Z01IT2E2K1hUbWdKMWlrb0VoRkFLTjNSY2N2K2VHSXV0MUJZQnNBbWNNTEdBQ0JlZUJ0U2VvZzJOTC9uenQ5NQo3'+
			'S1B2U2ljSkFlTjZQdlBVMUpkSHZ6dVZXV1M2SDk2c3lBRUFDSWRqbXVmVkY0dDVzNWMwdXZxQUp1TTM3ZDB6Y01tYWMvMERnckNQClNEYkdCeHNCb05ya0tZalMyUENlWC96QTd6NDYwaTk3T3YvTm1hK2YvZnI0RzdObUhqYmh5MDM3Q3A4WnMvUGFhOFZSTGVXMGk0b0UKQVVRVStqcU9YQWVjbVRhc3FwdHNrQS9xQmFBYzRjbWVueDlCTk5WNng1RW5mL25CdTVvYUtBSGorbExtNmNrblJyODNOWitCWGhuYQpyc29CN2w4T3h6TE9xUytxbXJWRFNJaFVBS0UwSGJ0dTE5NkJxWVdGZ3NNclRDTTJZaHJyQTZBczk3THY3Z2lKSGJ0KytjRXZQVDdjCjYvdDZiODE4WS94cjR5ZG1qU0t4d1ZmaVZRTHV2WW'+
			'1YRHZURFB3SXdaaTJXanF2bnRCYTdsVW9Tb1NDeHlKN2VHNFpqOGRFWjNlYW8KY3BYcjVJUGFBVmpCMTBPMG9lM29PLzd3TXcvZTNweHc1VDZYK2MvSkowZS9NN1hveVgyMTJsNnB0OVh3Y0E3SDBFY0x6eGRzczB0bwpFS2tBUW1oSDg0M0RPN3JuQzVleUsvTEJsZ093UW54UDQ5MzluMzc0aTQ4ZTZsVkVBTFpUR0ozNXkvRS9QZnZxakZtQTdkSzFHc3RYCjd5LzduakZyc2ZTeWVrNXZjZG9GU1lJQUVwSDNEUnphSlVYR1p6VXpGRExWS1FpMUFFQTg4cXZpKzNmZSt1VG5QbkpiV3dNaFlORHoKbWFjbm54ajl6dVI4aGhza2lHZkt0MWg5djlxLzhmWTVITU1ZTGJ4WU1LMGVLU2tURVlTUWp1WmI5M2R0'+
			'V3lwTkwvTHFtOVJvRjlZUApRS1c3b3lDQ0NFMTA5djcyWTcveDBNRStSUUtINHhRbVovOTg3RS9IVDh5YVJWaWI2TEV6Wm1WS3I2b1hyVzdTSW9vQ0tJZ2k3ZXUvCmZ0Z1JMeXlvcHVjcTE1VS9XQzhBdENyRWpTQXFKKzk2NSs5OTlzTzN0alpTQWdham1QbngxSmRIdnoxNU9jTjBPTnpya2I5MVc3VU8KQ08venFyNVhYTW5obEl4UjlaZ3FtVjNFRFowcDNaWStlaWlWUEgxUjFabmJ4enEwd1hvQUlGVXhYZ1JSRXUzcytlQzd2L1RvTFRzVgpDUnkyclU3TS9zMzRWOFplbXRFOWUxOUphTDA2b09JYnh6Wm1peS9rcDdVTzNpS0tBZ1JDSXRKSS93M0RTNldMR1p1aDBxbllKQURLCmpDOEhKaStxcEE0Zi'+
			't2d2puLzFRVjR0cjd6UHpQNXo2eXRsL25Kak5NSjJ3U3JkbXVkZHlSVWRvOVgwT1c5Vk9GNCtwb3RXSm1FZ0YKVUZuc2E3OXBiK2UyMFptQ1VlVWkwWTBEUUplTmZZVEdPN3ZmLzY2dmZQcjJnN0VJQVJ5N09ESDc5ZEUvSGo4K3ErV0pCVjZwaUVtSQpzV3YwQTBKYlYwQzhjNWx0WFZKZkxyeWxOanRka2loQ0lLU3A0ZURReUpCbVQxNjJPZnppMnpyNVlDMEFLT2l5K0w3eDZMMi8rOWluCjN0dlZLZ2hnM0Nncy9lakNrMlAvT25rNXczVGloT1cya3RpNi9JRFZ6dVRjVnZVemhaTWx3ZW1pTVprSW9KSTQwSFhqM3JhV3BkS2kKYXZObENaUTF6T05xQUpUbHZpcSsvOEpETisyS0tZVEFkZ29Uczk4Y2Yz'+
			'TDgySXhXZ0FVZU5tN1ZuelpGQjRTL1pjeWFLNzJvVGhzRApRdG9MblJzYmJoeSs2OGE4T2IxVUN2c0hWekNLS3dNUXp1ZkxycS9ueC9mTkNRb3c2TVhNanlaL2YvU2ZKdWZudVVhY3NDMnYvTFF4ClA0QXMydysrNWR4UjlWUHFhUzFoZDNrcEZJRTJwNDRlR2g0WXU3U2tCbjdpU3JkZUU0Q3d6bmRUMmdxSnQ3Ui8vSDFQUEw1L1FCQUEKT0k1NmJ1YXZ4Nzh5Zm16V0tNRG1uQVRTQ25pU0d4VENPUVZaWFJoOUhSQzZzdHdQeWlrSitmdit1YUd6SE1jNnI3NVlXTlE3aGJSQwpSVkFnSWc5MjMzYkl3WnNYTE1jYnpESjdyY0FMMVFENGNpLzZjbytva2p3dzh1U25IN212UFUwSUFHYXF6MTE0NHN5M0p5NH'+
			'R1SElQCkVJQVFRaWh4YS80Q29lN1ZjaUthaU1YU1ZIY1lXNW05ZVVVOEUwNzdDZUsybUp3VTRsUm1JaEdKQUFwQ0NDaHhBU1dCS05pNTBnbjEKVGJOZjZveFJHUVFRYUZ2VGRidEVaUzYvV0ZqQnJDenJRd1htZ2NQakFpRFRhR1BMSis3L3hIMGovWkpmUnphUFQzL21qUmNuN0FMcwo0SllDRnlpVkpDcFJtaVFTbGFSdDBlYW9LQTNIdGtjVTgrTDAxNllYUzI0NHZHNUhpRVFqajdWZjMyTkVMK3FuTmRNdW1oZEx1bUU3Ck9lWXdadHNXWjJERUFmY1NxNktVUERyd0p5UDdPeUQ3TjlDTUh4Ly80bCtmZXNzc3dJQVpLcjVYelQ0b2w4ZHBFT2dFcWs5cE9ERDgKdVlmdnZLRWxGWUtKbmRWSFM3Wk5SQ29R'+
			'S3NrUlNSQ2JJK2xZVE5rYmE0NG80bDZ4Z1VwU1d5d2RJYUlpUzFSYmZESlhXcGRGcm13bQpLY1RlMDUxcXRibGhNVWMxWnpSZFY1MDM3YUtWMVU5cHFybW9MMmpNTWt6REJHZXc3RGZVS1gxL2lNV2p5dDJIV3hxLzlmVGZmeSsvCnlEUUlFR0FGcGZmUTdBTWZnSEw5UGhqN2RPc2pEM3owbm9PRHRMTDd3czNKajNZK0s2V2Q3VVNSdHNXR0U3TGNHV21QQ1hLRElrbUUKU3BUNE0wRUlDS3dNZTBiVHJab3IvWnl4TS9ZOG1tT2lIT0ZBRSt0MndEaTdpM0hIdGdxbWJWMHlaa3EyUGxvOHI4TEo4SFBDMGRaRApEWlVDTFFtSGQvZDNYcmY3TC8vbCtFbXpDQUdDNXg5UTJJQVBnVmdoK1VIOVhrN2NkUER4OT'+
			'cvM1NHTmlXZGZFenZUdlNRdTlNWjRrClZCQVZSU0h1cEpleTZ4SFdoL2FKM05rQ3Q5MnZlZWhBdGZ4VnBrY0p1RE9tdmxiWVpSRUZGSUFBQ1NCY0JyaUNPQWZyWnJEaEdMcGwKZ21sOENTM1JwdVJ5bGQ2Yy9OZzl3MzNmZXZvZi9uMXh3ZU1EQWFiM3d3emNCWUNFQ2hvS0ZDak5iUis3LzVQM0hSaWlLNmx2UWlOcApPYzJxdk4xVnh0RXlUdWZ5SlRqVkpGWVR6WmR2blZ6eGhZWDNkY2RpSWJMS3Z5VUFVTUNWaE1MQkUyajE2MGZMR3FVMzdCN3MzanZ3CnQ5OTk2VFZXZ2hCeWpMZ1BRTm5iajBCQnRIbmI1ei94cVo5dmlLM0tuc1NiM0JRMEI2cGQwRGhuL1BXNWszUEFZUHErb2JnTWdPWFYKNHpuRDRI'+
			'dzFUM0NOYUpEWnhzbjhVaW5HSUFDY241ci9qM0hUYVZEdTdrL0lnQ1EyUktPRXJOUGRiVXc4ZXYvK3dkLzR4ck92TURYNApFZTdPUi9NNUlQRDFJK25ISDM3OGdUWElCMGZKTHBtY2MwenowZm1sQmFDSTA5a1RFN2JEc2FBdWFFQmJMS3MvY2tpaTNKckt2NTUzCjZzd01jT2Q4NlZ5cHk0WUVqQzMrNWcvK2U5TGhNdDJla2dRZzNYaXdmNEFLRU9YZTN0MVNCSUFrSkJWaFZUZ291WDdYRno3NTJNenMKZEVDOE95TU5aUUFVUkJCRlZFa045a1NWeXN0TnAyUnhjTXdhSjZjdDI4R3JtV01URHVQSTRuS2hwQUljRG5OQ2FtNnVkQ3o3TUpPSQpyZjkwNllLbkFlb0JZS0YwT25lTEtVUkFNdnJva200RGx2UG'+
			'1BZ0NReTgrTlV3SUlRanE5VFpBQXRDWHZHVW9KUUhkNnVGa2lnRVRqClV0Z0RvN1Nubzd0dmRzbmxMaml3UVVIQVJjOWpreUFqaWloaWVmekowK21tTzNkUmF1R3llZTZTWlFObk1qK2FzQmxIeGpvMzd6Z2MKTnZPOHJGVmFRcm03THlMQ3pxby9YZFExRW9KbXJaaGcyVEZlMEg2NjlGRTFtWUN3cTJWWHk5bE1DQnp1OWNBdXpWNzB4dmdIWXhSQQphN0l2S1JLZ0ovbHpRNG9BQUYzSm9UU2xsd3RmL2VISkJjUzkwYmRod1FMS09zRGxnQmdTUFBGVzRkZWZIajRsaEFDd21HRmZrWXU1Cmh5MEgrdHVHV3ltNGZibHdOcy9yVDQweHh6eWVuUzAwcElrUW9mMUprZHZMNjBMbGs3bHVBY0JVWmlvREFBTDl6'+
			'bW4zbEs3a1VETWwKaTRWWFJqVVppWUI4MDFXYXZnaUlrQkZCREhFa2VQeWNlbTUwWGVRaW1OYks0TUNkOCttQTdJbHNqNEl6ODQzQ09aVTdhK1VEV0ZVKwpnSG8zOVRJQTlxWEM2ZXhnaDZCRXBmc0cvdkg1UlJVRUlxalhaL2UyTkhTN1VITlkwWFEvdmJYdzFnSUFEZ2x4T0xCZ3dZVGszY2Z6CkE4cE9zRlErdEFiQnZqUHBFZ3dBanBjQXQrRkU0L3Q3WkFGTVU1L0paRldzS1N4WDRnRlZIOHRidXBBZ1pGZnIzc1puTG9GQWRKMXYKYjB1QzNoTFBNcTFXS1BGVnZVdGg0TGVJSVVKc21EQmdRUElPaDhlWGVWdVhUQWUyZDUxZEFRQUhBMGszMzlZalV4Z3orVmNYbVU3VwpGSUJLSjJLNUZ0RE01L01mTD'+
			'NVNG9PME52VTNQNkxCQlBjZklCMER5QUtBQk5JSjNwT3dYVUsvdjdoUk14NXVRSGZnQjNDTmVneERnCko0RjRqTzBUekwyYnNOQStZQWRuT0dBZ0VCQTl2SE9nRFp6WmI2bFRLZytOZjQyT2tMdXhYczJONWRwYmlTUUt3OXVqc2xhQ0JZQUgKQUZDdnAyVklSRzlRL1gwWEdzQ0JoZ0lLVUtIQmdPbFRJSHBrV2pBODk4WWRlZGtEd0xvaUFMYkhBUTQ0Uk1Tb3VDT1pFZ0hUZUsyUQpOY0EzbGhZblRrWTlsbjJISWNVazRlaGdVMHJMd1lRQnRpWUFRb1dRK0o5c2FDaEFSUWthREZnZUpSREJ3ZUVFV3RIVlAwNEFRQ1hCCnEzTUFBNE1FQVVKejZ0NFJTWUNqbGw3UDZUcTV3bnlBNnYxbG5ndzNqSlA1Z3Ba'+
			'T0VuR283ZkRPNzg2QXdJWU83cEc1SGc1d0lYR2cKUS9VQTBHRjZnaENJZ0JWU2ZBeFdJQUtyQWVCNFdzRS9RanpsSWcyMEQ3WlJBbXN5OTFhV216NEhyQ1lHL0VySHVHMitucDlWMHc3RQpsTEs5aVVoY0JJVUQzVHU5bWt6WG9xME1nQUVOR2pUb0hnYzRQZ0N1Q0pROVpCdG1vQnhkSmVjVHpqMVc1N0M5Y05MOUpIamFWU0xTCjdYdTZHc0V0L2VXbG1RSnhWaHZaOVNkRjRVeVZKZ3Q3TENwTHdoMjd2L1dUeFFJRUR3SWJDTFM1Yncxb1lDYkZ3Q3FJM3JJTUV6b00KNkY2Q0pCQUJsNnh5aU9EckEzOHZUREQzMUtML3ZaK3VWNkM0K1lUbXhpTzdKUUZPWG4xK1NkWEFxcFhibFRoaEJaUEJpcVdYY25jYg'+
			'pTb3pTM1IzYldoY3ZlMmFNdy9ENjdRUGdUOHdQQStGbk9nRHVlUUJtc0RpalFnUmNQNFhCaGdqVHV3a0NnbGxBT0F2ZXpDTmVnT0xWCmpFV0lqWW5oYlpUQW5zNi9sclZOdjB4U1YxTFUzK2VtL2xvMlUreE1nbmFsait4NWN6U3c1SURsQ1NEMWpKNmY4RUFBUkJtUzhzSWMKTzFpUWdiQWZVQTRScUdkclVVRnMyWGJ5MExJbTkvYWUvQXZ5OWYzcEdEZzN4bk1YaTdBcnZiK1ZLME9WbjhJVklkOFVjdXRNZmlMZgowVWFrR04yUmttVEx6Vnk1OXA0RmpsWmxOYTBNQlBHb0tRK2pFNWgzbEZOaW5oTzdMSGNhSkE1V1dkSldzUnBFanQ0ODJCaURvNWFlClhWSzlOT2pLRTdyQ01sOCtSbFk4eXRtbDBuanhK'+
			'bE9NQ01KOUkzL1ZmS0VRSk8rRUVGS1ZGYm1WcHR1SGFRbk9MaWRGNjFtelYrbEMKU3oxdGQrd0I0TXdVWDg1YlpvMzNXdjFIdUthL2tQMkExcEFnUW1POEllN3htd2d4NE5UcVZzUEN1enJ5dFJWWDAyQUpuRWlsd2UyZApqZUJjUDdrMGx1ZTJQeEc0a29uS1BheGtxL0R4OEphRGM5czRscjJRaHcyMEorOFpFWlZBQ3dpQnR0b0FDZlUzVjlaOFpoUWs1YTQ5CjZSaVlWbm91a3kxeVZsWVZZUkxEQ29SanVZenhxaTBBenUzcHduaWVXZUNLZUgxdk1oNWFkVWhYemdSZUhRQXExNFZJMjlvUERnZ0UKTEt1ZEx0aG01V1RvTUdaMTFBYlprbjZzWUJqZ3dKR2g3clpBQks0eEFLUVNnSzdrY0JQQTdUUEY4Uk'+
			'p6YXRZbmF6VnU2QzlsaXlvYwpJTld3WjdmZ0M0Q3JCNjR4QUo0TmtDTkhkNlVpNEk1eEluZHBZMW1BRlFEZzFsUitNZzhiYUpTUGRFaXlaM2NxNnhGWEdZREtTWE9TCnFJejBSQ1d3VXVsRTFnaE5qRjFiSVZlcnh1Vkh2ZWJNRmwvTjJ5WTR3WUd1am1iL1Z6MElOdEEyQmtCNU9helkxVExZQnNDYXlMMlMKZFF5Lzcyc2xQVmVlU0xGU0daZUE4SkorTXFkcFlNRHVqcDRPNG1zQm53ZXVHUUNlTVJLVk93N3M3UVRueHRqU1hLR2NCbGtyMmxzNQpJYkxNVTRGbkNxM1hjL05GT0VBOGR0MUJNVnFoQ0s4UkFJRUhBREVTT2JvenJzQXBsWjVieXBkUWtRZ25hOTVrelpSWUNBTnVqZWRQClpXR0NSK24rUmxr'+
			'cG05K05RVkF2QUg0eDNRT2d1V2w3aWdMMjVmeFBzcnJwVnUwckxicEh4eHI3MWRxaThreXdYT25OSlVzREp4aloKM3QzaGtlK2J3cnBidlplV0o4eUxFSW00djJkdko3aGpuc3hlek5kYkNicENZNGJ4UWk2amdnRURpZDVVb0FTbGpabkNqUUJBL2VtVAowY1FkK3hJS1dFbDdOcGZWdG1yVlA3TlBsODZYWUFNSithNDlrYWhuZ1lSUTlIclZBQ0NoR0VDQ0ZJbnQ3NVFGT0hQRkYzT1dDVytDCi9FcHJtNWJQWkEzSGc5VS9VcFVrWlpkTHAvTGNBSlBGQTcwTkRZRUcySkEvdUJFQUFpVzBzMk43R3B4WjQva3orU0JkdW95b0RabEIKQUhDSzZ2TUxxZ29HRFBjTTl3YUdjRU9XWUtNQVNKQ29mTEMzdXduYz'+
			'BsNWVYQ3I2SnJCU3ZmbC82d3FHL0N1NFk3eVJtMU81QXpSSgozVWtxaG9LaXVyM0JlZ0NvbkUwbU5TYnZQNkNJY0xMRkUxbGJKM3pySmtweWRsNDdXK0lPRUpQZmV5QVJyK0NCT2lHb0Y0RHlsQ3F4CnYzMm9qUkp1enhYUDVaa0ZqaFdrbjZ3RGlQRDNaTm1WQkFCWVZqdVpzM1J3U2dZNzJ0dUMxSWdRRk1TdUlnQ2VEMERFd3dNOXplQ08KOFVKK1FnT3JUQnh1OG91VjlHZVgzSUxyWU91aC9oQUFkYXZCMmdHb2ZES0lsRXpkTWlLTFlGcnB4YVc4eHJmMndUY2M1cW5jaFJ5MwpnSmgwZUNTV0tBOUV2VkZodlJ6Z08wRlNLcjZ2VlNDd1p3cW5jOXdnbkdCTFg4NTg0ZldzYllCTDlPYldSTFRzak5VYkZk'+
			'WitFUTFiCkFFaUhCenBTNE13YUswd1hOemtMc0ZKalJmMlZmRWtIQTFyVHZYMmhvTGhPVTFpUENJVElsNVRyZDZSajRKcis0L3k4NXM4SHJ2YjIKTjVnVURkK0gyK2FaWXJZRUJuUW5EclFIZVFIcGFnRkFVRTZFaVpEYVcrN2JKd2pnUmZPa2Focll6RFRZYXMwNXE4MGJZSUJNYit4dApTRlRsaHJZY0FBUk9zQUFSWWtPOE1VNEFYbVQ1b0s2eGtvR3JubEFhbm1KYWRvUlhMb3hVMVRpSXp4TWlQZHliVEZRRXhYVkFVT3ZECjFDbzhBRkcrWjI5N0VnQnRqaHhxZkQycFdjdFRJUnNzajFmdkV5SFcxNWlLdVFQWEZPdHZtNTZ1eWd2VXlJVzFBUkN1QklrUWt3M1gKOXlraUFKcE0vRXAzMGZoK1pLdkZRQl'+
			'N2Uy8vYWp0NUd0M3Jka2JwdDU3TW5lVGsxc3VVY1VGa0trM3Zhamd5NUI2aThzLzBKK1NNZApwcm5WQU94czZFdExDVytLbTNCa1QwdmpmREZVSzZTMVBuK3VkZ0I4dEVWUnVuRjNjNE4zaE5Kbzc3YmU1bHFxY25VMUYzNVBjMUd5CnF5V1ZtTjlRYnFnV0FLb0VJQmEvZFVkQ0RoMlZJRzBwOFN1MGxzUTdCaWFtSEtGQ0VkYmtqZFNDV0ZVbGFFZkhMVU1iS3Nwc1FrdEcKcnUrWG8wRnFyQTVMVUNzQVFRQXFLamNNdFNkcXVIcUwydTE3dXJkVitJTTFqc242QWFnTWdxVm8vSjI3RXNxNnI5Nnl0ajIxdnpkVQpLNnpaRXRUR0FhRWxsVVBkaDNkY2F3RUFnTWJZa1VGUnJxZ1NiQkVBRmVRVHVTM1pGci9X'+
			'eExzRTlEUTNKSVBvUkt4VkM5UXFBcDRDCmpNVGV0Uy8rTmhBQUFEamMxOXRXZjdGMC9TZUhueDhqaWNwQXE3elZUNlJkWjJ1UWU1cXBVbSt0Y0wwQWtFQUUvT2hyZzNOek5xK2wKb3ZmdVU1UVErVnNxQW1WbDgzYlFnQUNBa3ZYR0pac0VDWEt4dHI3Vk1vNGhOOWdnejExWTBxODE2UURnc0djbW54cXphTDBpc0g1WAoySDhzdmdnUm9vbS9QVzdTajR6ME4xMWI4bFhyNmJGdnZuSytFT1FvaEZwTHBlczlsVUJCRWlrazBZZ2tVa2doSVN2YlV5MnhkVjYvClJjMTB4akpGa3hzb0lJOGNjc2dqaHp3S01OWjdodzA4WGQ1MHhoZkhGNjh0QUFDcTZtZTF0dlhyQUw4NndZSmxwMWY1bjJHczJoaE0KYncyQU'+
			'NjdGZDYkxlVmdzSE1HL0JvUUVkRWdUNFM5aXViWE5nb0FUTld3cGx3YXB0YU5ZUGdMKzJUQS8wTElPeUVSSGFsTVpnb1lRaQppdDVpS0ROWXk3TEpBUEFRQUg2aTFrSGtiUUNBQ2MxYkRLVjdBR3daQnpCWXdUb01kODlmV25QdG1yc1NxQVN0WWpuY2xvcUEvL2dKCkJndksyd0lBQTVyM05yWlNDYnBqN241eXdUQWd2eTBBTUwwbHY1Wm5CYlpRQ2JxTmVXdXcvYVZMMXhZQTJ5UGNndTA5SzZpbUVuMXQKSE9BRDRmNW9qV0hIRmdIQWx2MmJwcHI4azlvSUlFRkVVUDVYV2RjZWdQQjZzSnI5d2RvSklGWHZhOTBxcXVmWHVqTS9nKzEvQVJsMAp0ajVmOVo5d0FBQUFDSFJGV0hSRGIyMXRaVzUwQVBiTWxy'+
			'OEFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TVRrdE1ETXRNVEJVCk1qQTZNelU2TWpVck1ETTZNREJzNzc0NUFBQUFKWFJGV0hSa1lYUmxPbTF2WkdsbWVRQXlNREU1TFRBekxURXdWREl3T2pNMU9qSTEKS3pBek9qQXdIYklHaFFBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+Cjwvc3ZnPgo=';
		me._ht_node_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_node_visited;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMTJweCIgdmlld0JveD0iMCAwIDEyOCAxMTIiIGVuYWJsZS'+
			'1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTEyIiB4PSIwIiB5PSIwIgogICAgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUJ3Q0FRQUFBQjhwYkJaQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFKY0VoWgpjd0FBRHNNQUFBN0RBY2R2cUdRQUFCbE9TVVJCVkhqYTVWMTVi'+
			'RnpIZWYvTnZHc3Y3cExMUXp4RmlvY09pcnBzeTNac1dZNlBPSzdqCnhFMlFPSW1kdzdWck5DalNwR2phSm0zYUluQ2JHa2lQcEdsNklHaUJGbWphRkEyS0pxZ0ROMDNUTkxialU1WXRTN0pGVWlJcGlhUW8KY3NtOTNyNTdwbis4WTk4dUQzR1hwT1MwczFpK2ZmdU9uZTgzMy8zTlBBTC96eHU1UnI5SnZMOXU0MVh2LzdNQUVCQVEwTkNMZ0lDRApWYno0MVFUaGFnSkFRQ0dBUW9RQUFZSzNCVGdjMkxCaHc0RUR4NFBoS2pYeHFoSHZraTlBZ2dnSkVpU0lWRllpaE5xV3FjR0NDY3VECndZWURBbloxK09EcUFPQVRMM3JFSzVERmFIL3YwSTc3anlTaUo4OSs3My9PVFJwRldEQmhnb0o2dkhCVitHRHJSY0'+
			'FmZTU5NEdUS1UKcHBaYnJ2dXRUKzdwYTB4UXFobW5KLzdsdi83dWUvTnpUSWNCRTViSEM0Nm5FYmEwQ1Z0TVBnV3RJRDJDaUJEdjYvL1ZoMy9uMGQxOQpzUWdoZ0NSMnR0dzAwdE94V0xxNHdBbjhsMjhwdHRndWJDVUFaYWwzMlY1QkZKR0dsanR2L2JQUFBYQmJVd01KY1o4aTdSODhQQ3hFCkppK3JobWNicUVmK0Z2UG8xZ0ZBS3NaZVFRUVJNZEhkKzl1UC9mcER3MzJ5QkE0R0d5WWNjQkFRUWxvYmI5blgzbjVKbTE5aVBDQSsKN0MzOFRBSGdTcjAvOWhGRVNMU2grZDdiLytpejc3MjF0WkVRTUc1bzJYT1hYNTJieTlwbUhJSUFTa2hFSHVtL2VkL3MwblRHY2dJZQpJQlh1MHM4RUFLUkM1U2xRRUJF'+
			'VGZUdSsrSXVmK2ZEK0FWa0NoMjBWenN6OHpkbXZqdi9kMUZPWGZwSjF6RTRhRTRrQUt0QnRxWnRICnV0dlBUQmQwQnBDSzE1YTB6UWFBaE1aZTlzYytubjdnN2kvOTBnTzMrV09mVy9qKzVKZkgvbmx5WWk2Zld5cE01bDh1ekdvZHJGa1MKUlZCQ0doUDdCdy91THRtVDh6WUx2TVdmRVFCOGF4OGFleUhSUC9DRlgvak1nd2VISk5FZCs5R1piNHgvN2V5Sldhc0FDdzRjV01YUwpxY0pyYXR6cGxpSWlFVUFrY1VmSGpYczd0NDFmeW1rY25qQ0VPV0VUaFdIekFBanJmTS9na1ZpczZZUDMvdFlqSDdxek9VVUlISzVsCk0wOU4vTUhZdjAzTlo3Z0c1bEhDNFRqbVRPa2xWVFU3U0pOSUJaY1BEdTBhN25mST'+
			'JVczJCd0VGUEJnMldTbHVGZ0MremhkZFJ3Y0sKSWlRMnRQTlhQL2E1aHc3dUZBVndXSGJ1ek14Zm5QM3EyVGRtelFLeENTOGJld0xDWWVmMTQ4WFRwYVRUU1JTUmlDQ2lNTkI5ODBoVAowL21GeFdKZ0dDdlY0dHNFZ0xEY0s1N2tSK05OSDNqM0Z4OTk2SjdHQkFFWTlLV0ZwODQrY2VaZnp5OHVjaDBPV1hZTEFJNWxUaFNmCnp5OXAzYlJKb2lJb0ljbjR6WHVIK3kwK01XZXhJSmJjVkx1d2NRQ3E3YjJDS0lrTjcvN1VnNS8vK1A0QlFYRGwvczNaYjR4LzdkeXAKT2F2SXJYQzN3eFJ3Z01IT2E2K1hUbWdKMWlrb0VoRkFLTjNSY2N2K2VHSXV0MUJZQnNBbWNNTEdBQ0JlZUJ0U2VvZzJOTC9uenQ5NQo3'+
			'S1B2U2ljSkFlTjZQdlBVMUpkSHZ6dVZXV1M2SDk2c3lBRUFDSWRqbXVmVkY0dDVzNWMwdXZxQUp1TTM3ZDB6Y01tYWMvMERnckNQClNEYkdCeHNCb05ya0tZalMyUENlWC96QTd6NDYwaTk3T3YvTm1hK2YvZnI0RzdObUhqYmh5MDM3Q3A4WnMvUGFhOFZSTGVXMGk0b0UKQVVRVStqcU9YQWVjbVRhc3FwdHNrQS9xQmFBYzRjbWVueDlCTk5WNng1RW5mL25CdTVvYUtBSGorbExtNmNrblJyODNOWitCWGhuYQpyc29CN2w4T3h6TE9xUytxbXJWRFNJaFVBS0UwSGJ0dTE5NkJxWVdGZ3NNclRDTTJZaHJyQTZBczk3THY3Z2lKSGJ0KytjRXZQVDdjCjYvdDZiODE4WS94cjR5ZG1qU0t4d1ZmaVZRTHV2WW'+
			'1YRHZURFB3SXdaaTJXanF2bnRCYTdsVW9Tb1NDeHlKN2VHNFpqOGRFWjNlYW8KY3BYcjVJUGFBVmpCMTBPMG9lM29PLzd3TXcvZTNweHc1VDZYK2MvSkowZS9NN1hveVgyMTJsNnB0OVh3Y0E3SDBFY0x6eGRzczB0bwpFS2tBUW1oSDg0M0RPN3JuQzVleUsvTEJsZ093UW54UDQ5MzluMzc0aTQ4ZTZsVkVBTFpUR0ozNXkvRS9QZnZxakZtQTdkSzFHc3RYCjd5LzduakZyc2ZTeWVrNXZjZG9GU1lJQUVwSDNEUnphSlVYR1p6VXpGRExWS1FpMUFFQTg4cXZpKzNmZSt1VG5QbkpiV3dNaFlORHoKbWFjbm54ajl6dVI4aGhza2lHZkt0MWg5djlxLzhmWTVITU1ZTGJ4WU1LMGVLU2tURVlTUWp1WmI5M2R0'+
			'V3lwTkwvTHFtOVJvRjlZUApRS1c3b3lDQ0NFMTA5djcyWTcveDBNRStSUUtINHhRbVovOTg3RS9IVDh5YVJWaWI2TEV6Wm1WS3I2b1hyVzdTSW9vQ0tJZ2k3ZXUvCmZ0Z1JMeXlvcHVjcTE1VS9XQzhBdENyRWpTQXFKKzk2NSs5OTlzTzN0alpTQWdham1QbngxSmRIdnoxNU9jTjBPTnpya2I5MVc3VU8KQ08venFyNVhYTW5obEl4UjlaZ3FtVjNFRFowcDNaWStlaWlWUEgxUjFabmJ4enEwd1hvQUlGVXhYZ1JSRXUzcytlQzd2L1RvTFRzVgpDUnkyclU3TS9zMzRWOFplbXRFOWUxOUphTDA2b09JYnh6Wm1peS9rcDdVTzNpS0tBZ1JDSXRKSS93M0RTNldMR1p1aDBxbllKQURLCmpDOEhKaStxcEE0Zi'+
			't2d2puLzFRVjR0cjd6UHpQNXo2eXRsL25Kak5NSjJ3U3JkbXVkZHlSVWRvOVgwT1c5Vk9GNCtwb3RXSm1FZ0YKVUZuc2E3OXBiK2UyMFptQ1VlVWkwWTBEUUplTmZZVEdPN3ZmLzY2dmZQcjJnN0VJQVJ5N09ESDc5ZEUvSGo4K3ErV0pCVjZwaUVtSQpzV3YwQTBKYlYwQzhjNWx0WFZKZkxyeWxOanRka2loQ0lLU3A0ZURReUpCbVQxNjJPZnppMnpyNVlDMEFLT2l5K0w3eDZMMi8rOWluCjN0dlZLZ2hnM0Nncy9lakNrMlAvT25rNXczVGloT1cya3RpNi9JRFZ6dVRjVnZVemhaTWx3ZW1pTVprSW9KSTQwSFhqM3JhV3BkS2kKYXZObENaUTF6T05xQUpUbHZpcSsvOEpETisyS0tZVEFkZ29Uczk4Y2Yz'+
			'TDgySXhXZ0FVZU5tN1ZuelpGQjRTL1pjeWFLNzJvVGhzRApRdG9MblJzYmJoeSs2OGE4T2IxVUN2c0hWekNLS3dNUXp1ZkxycS9ueC9mTkNRb3c2TVhNanlaL2YvU2ZKdWZudVVhY3NDMnYvTFF4ClA0QXMydysrNWR4UjlWUHFhUzFoZDNrcEZJRTJwNDRlR2g0WXU3U2tCbjdpU3JkZUU0Q3d6bmRUMmdxSnQ3Ui8vSDFQUEw1L1FCQUEKT0k1NmJ1YXZ4Nzh5Zm16V0tNRG1uQVRTQ25pU0d4VENPUVZaWFJoOUhSQzZzdHdQeWlrSitmdit1YUd6SE1jNnI3NVlXTlE3aGJSQwpSVkFnSWc5MjMzYkl3WnNYTE1jYnpESjdyY0FMMVFENGNpLzZjbytva2p3dzh1U25IN212UFUwSUFHYXF6MTE0NHN5M0p5NH'+
			'R1SElQCkVJQVFRaWh4YS80Q29lN1ZjaUthaU1YU1ZIY1lXNW05ZVVVOEUwNzdDZUsybUp3VTRsUm1JaEdKQUFwQ0NDaHhBU1dCS05pNTBnbjEKVGJOZjZveFJHUVFRYUZ2VGRidEVaUzYvV0ZqQnJDenJRd1htZ2NQakFpRFRhR1BMSis3L3hIMGovWkpmUnphUFQzL21qUmNuN0FMcwo0SllDRnlpVkpDcFJtaVFTbGFSdDBlYW9LQTNIdGtjVTgrTDAxNllYUzI0NHZHNUhpRVFqajdWZjMyTkVMK3FuTmRNdW1oZEx1bUU3Ck9lWXdadHNXWjJERUFmY1NxNktVUERyd0p5UDdPeUQ3TjlDTUh4Ly80bCtmZXNzc3dJQVpLcjVYelQ0b2w4ZHBFT2dFcWs5cE9ERDgKdVlmdnZLRWxGWUtKbmRWSFM3Wk5SQ29R'+
			'S3NrUlNSQ2JJK2xZVE5rYmE0NG80bDZ4Z1VwU1d5d2RJYUlpUzFSYmZESlhXcGRGcm13bQpLY1RlMDUxcXRibGhNVWMxWnpSZFY1MDM3YUtWMVU5cHFybW9MMmpNTWt6REJHZXc3RGZVS1gxL2lNV2p5dDJIV3hxLzlmVGZmeSsvCnlEUUlFR0FGcGZmUTdBTWZnSEw5UGhqN2RPc2pEM3owbm9PRHRMTDd3czNKajNZK0s2V2Q3VVNSdHNXR0U3TGNHV21QQ1hLRElrbUUKU3BUNE0wRUlDS3dNZTBiVHJab3IvWnl4TS9ZOG1tT2lIT0ZBRSt0MndEaTdpM0hIdGdxbWJWMHlaa3EyUGxvOHI4TEo4SFBDMGRaRApEWlVDTFFtSGQvZDNYcmY3TC8vbCtFbXpDQUdDNXg5UTJJQVBnVmdoK1VIOVhrN2NkUER4OT'+
			'cvM1NHTmlXZGZFenZUdlNRdTlNWjRrClZCQVZSU0h1cEpleTZ4SFdoL2FKM05rQ3Q5MnZlZWhBdGZ4VnBrY0p1RE9tdmxiWVpSRUZGSUFBQ1NCY0JyaUNPQWZyWnJEaEdMcGwKZ21sOENTM1JwdVJ5bGQ2Yy9OZzl3MzNmZXZvZi9uMXh3ZU1EQWFiM3d3emNCWUNFQ2hvS0ZDak5iUis3LzVQM0hSaWlLNmx2UWlOcApPYzJxdk4xVnh0RXlUdWZ5SlRqVkpGWVR6WmR2blZ6eGhZWDNkY2RpSWJMS3Z5VUFVTUNWaE1MQkUyajE2MGZMR3FVMzdCN3MzanZ3CnQ5OTk2VFZXZ2hCeWpMZ1BRTm5iajBCQnRIbmI1ei94cVo5dmlLM0tuc1NiM0JRMEI2cGQwRGhuL1BXNWszUEFZUHErb2JnTWdPWFYKNHpuRDRI'+
			'dzFUM0NOYUpEWnhzbjhVaW5HSUFDY241ci9qM0hUYVZEdTdrL0lnQ1EyUktPRXJOUGRiVXc4ZXYvK3dkLzR4ck92TURYNApFZTdPUi9NNUlQRDFJK25ISDM3OGdUWElCMGZKTHBtY2MwenowZm1sQmFDSTA5a1RFN2JEc2FBdWFFQmJMS3MvY2tpaTNKckt2NTUzCjZzd01jT2Q4NlZ5cHk0WUVqQzMrNWcvK2U5TGhNdDJla2dRZzNYaXdmNEFLRU9YZTN0MVNCSUFrSkJWaFZUZ291WDdYRno3NTJNenMKZEVDOE95TU5aUUFVUkJCRlZFa045a1NWeXN0TnAyUnhjTXdhSjZjdDI4R3JtV01URHVQSTRuS2hwQUljRG5OQ2FtNnVkQ3o3TUpPSQpyZjkwNllLbkFlb0JZS0YwT25lTEtVUkFNdnJva200RGx2UG'+
			'1BZ0NReTgrTlV3SUlRanE5VFpBQXRDWHZHVW9KUUhkNnVGa2lnRVRqClV0Z0RvN1Nubzd0dmRzbmxMaml3UVVIQVJjOWpreUFqaWloaWVmekowK21tTzNkUmF1R3llZTZTWlFObk1qK2FzQmxIeGpvMzd6Z2MKTnZPOHJGVmFRcm03THlMQ3pxby9YZFExRW9KbXJaaGcyVEZlMEg2NjlGRTFtWUN3cTJWWHk5bE1DQnp1OWNBdXpWNzB4dmdIWXhSQQphN0l2S1JLZ0ovbHpRNG9BQUYzSm9UU2xsd3RmL2VISkJjUzkwYmRod1FMS09zRGxnQmdTUFBGVzRkZWZIajRsaEFDd21HRmZrWXU1Cmh5MEgrdHVHV3ltNGZibHdOcy9yVDQweHh6eWVuUzAwcElrUW9mMUprZHZMNjBMbGs3bHVBY0JVWmlvREFBTDl6'+
			'bW4zbEs3a1VETWwKaTRWWFJqVVppWUI4MDFXYXZnaUlrQkZCREhFa2VQeWNlbTUwWGVRaW1OYks0TUNkOCttQTdJbHNqNEl6ODQzQ09aVTdhK1VEV0ZVKwpnSG8zOVRJQTlxWEM2ZXhnaDZCRXBmc0cvdkg1UlJVRUlxalhaL2UyTkhTN1VITlkwWFEvdmJYdzFnSUFEZ2x4T0xCZ3dZVGszY2Z6CkE4cE9zRlErdEFiQnZqUHBFZ3dBanBjQXQrRkU0L3Q3WkFGTVU1L0paRldzS1N4WDRnRlZIOHRidXBBZ1pGZnIzc1puTG9GQWRKMXYKYjB1QzNoTFBNcTFXS1BGVnZVdGg0TGVJSVVKc21EQmdRUElPaDhlWGVWdVhUQWUyZDUxZEFRQUhBMGszMzlZalV4Z3orVmNYbVU3VwpGSUJLSjJLNUZ0RE01L01mTD'+
			'NVNG9PME52VTNQNkxCQlBjZklCMER5QUtBQk5JSjNwT3dYVUsvdjdoUk14NXVRSGZnQjNDTmVneERnCko0RjRqTzBUekwyYnNOQStZQWRuT0dBZ0VCQTl2SE9nRFp6WmI2bFRLZytOZjQyT2tMdXhYczJONWRwYmlTUUt3OXVqc2xhQ0JZQUgKQUZDdnAyVklSRzlRL1gwWEdzQ0JoZ0lLVUtIQmdPbFRJSHBrV2pBODk4WWRlZGtEd0xvaUFMYkhBUTQ0Uk1Tb3VDT1pFZ0hUZUsyUQpOY0EzbGhZblRrWTlsbjJISWNVazRlaGdVMHJMd1lRQnRpWUFRb1dRK0o5c2FDaEFSUWthREZnZUpSREJ3ZUVFV3RIVlAwNEFRQ1hCCnEzTUFBNE1FQVVKejZ0NFJTWUNqbGw3UDZUcTV3bnlBNnYxbG5ndzNqSlA1Z3Ba'+
			'T0VuR283ZkRPNzg2QXdJWU83cEc1SGc1d0lYR2cKUS9VQTBHRjZnaENJZ0JWU2ZBeFdJQUtyQWVCNFdzRS9RanpsSWcyMEQ3WlJBbXN5OTFhV216NEhyQ1lHL0VySHVHMitucDlWMHc3RQpsTEs5aVVoY0JJVUQzVHU5bWt6WG9xME1nQUVOR2pUb0hnYzRQZ0N1Q0pROVpCdG1vQnhkSmVjVHpqMVc1N0M5Y05MOUpIamFWU0xTCjdYdTZHc0V0L2VXbG1RSnhWaHZaOVNkRjRVeVZKZ3Q3TENwTHdoMjd2L1dUeFFJRUR3SWJDTFM1Yncxb1lDYkZ3Q3FJM3JJTUV6b00KNkY2Q0pCQUJsNnh5aU9EckEzOHZUREQzMUtML3ZaK3VWNkM0K1lUbXhpTzdKUUZPWG4xK1NkWEFxcFhibFRoaEJaUEJpcVdYY25jYg'+
			'pTb3pTM1IzYldoY3ZlMmFNdy9ENjdRUGdUOHdQQStGbk9nRHVlUUJtc0RpalFnUmNQNFhCaGdqVHV3a0NnbGxBT0F2ZXpDTmVnT0xWCmpFV0lqWW5oYlpUQW5zNi9sclZOdjB4U1YxTFUzK2VtL2xvMlUreE1nbmFsait4NWN6U3c1SURsQ1NEMWpKNmY4RUFBUkJtUzhzSWMKTzFpUWdiQWZVQTRScUdkclVVRnMyWGJ5MExJbTkvYWUvQXZ5OWYzcEdEZzN4bk1YaTdBcnZiK1ZLME9WbjhJVklkOFVjdXRNZmlMZgowVWFrR04yUmttVEx6Vnk1OXA0RmpsWmxOYTBNQlBHb0tRK2pFNWgzbEZOaW5oTzdMSGNhSkE1V1dkSldzUnBFanQ0ODJCaURvNWFlClhWSzlOT2pLRTdyQ01sOCtSbFk4eXRtbDBuanhK'+
			'bE9NQ01KOUkzL1ZmS0VRSk8rRUVGS1ZGYm1WcHR1SGFRbk9MaWRGNjFtelYrbEMKU3oxdGQrd0I0TXdVWDg1YlpvMzNXdjFIdUthL2tQMkExcEFnUW1POEllN3htd2d4NE5UcVZzUEN1enJ5dFJWWDAyQUpuRWlsd2UyZApqZUJjUDdrMGx1ZTJQeEc0a29uS1BheGtxL0R4OEphRGM5czRscjJRaHcyMEorOFpFWlZBQ3dpQnR0b0FDZlUzVjlaOFpoUWs1YTQ5CjZSaVlWbm91a3kxeVZsWVZZUkxEQ29SanVZenhxaTBBenUzcHduaWVXZUNLZUgxdk1oNWFkVWhYemdSZUhRQXExNFZJMjlvUERnZ0UKTEt1ZEx0aG01V1RvTUdaMTFBYlprbjZzWUJqZ3dKR2g3clpBQks0eEFLUVNnSzdrY0JQQTdUUEY4Uk'+
			'p6YXRZbmF6VnU2QzlsaXlvYwpJTld3WjdmZ0M0Q3JCNjR4QUo0TmtDTkhkNlVpNEk1eEluZHBZMW1BRlFEZzFsUitNZzhiYUpTUGRFaXlaM2NxNnhGWEdZREtTWE9TCnFJejBSQ1d3VXVsRTFnaE5qRjFiSVZlcnh1Vkh2ZWJNRmwvTjJ5WTR3WUd1am1iL1Z6MElOdEEyQmtCNU9helkxVExZQnNDYXlMMlMKZFF5Lzcyc2xQVmVlU0xGU0daZUE4SkorTXFkcFlNRHVqcDRPNG1zQm53ZXVHUUNlTVJLVk93N3M3UVRueHRqU1hLR2NCbGtyMmxzNQpJYkxNVTRGbkNxM1hjL05GT0VBOGR0MUJNVnFoQ0s4UkFJRUhBREVTT2JvenJzQXBsWjVieXBkUWtRZ25hOTVrelpSWUNBTnVqZWRQClpXR0NSK24rUmxr'+
			'cG05K05RVkF2QUg0eDNRT2d1V2w3aWdMMjVmeFBzcnJwVnUwckxicEh4eHI3MWRxaThreXdYT25OSlVzREp4aloKM3QzaGtlK2J3cnBidlplV0o4eUxFSW00djJkdko3aGpuc3hlek5kYkNicENZNGJ4UWk2amdnRURpZDVVb0FTbGpabkNqUUJBL2VtVAowY1FkK3hJS1dFbDdOcGZWdG1yVlA3TlBsODZYWUFNSithNDlrYWhuZ1lSUTlIclZBQ0NoR0VDQ0ZJbnQ3NVFGT0hQRkYzT1dDVytDCi9FcHJtNWJQWkEzSGc5VS9VcFVrWlpkTHAvTGNBSlBGQTcwTkRZRUcySkEvdUJFQUFpVzBzMk43R3B4WjQva3orU0JkdW95b0RabEIKQUhDSzZ2TUxxZ29HRFBjTTl3YUdjRU9XWUtNQVNKQ29mTEMzdXduYz'+
			'BsNWVYQ3I2SnJCU3ZmbC82d3FHL0N1NFk3eVJtMU81QXpSSgozVWtxaG9LaXVyM0JlZ0NvbkUwbU5TYnZQNkNJY0xMRkUxbGJKM3pySmtweWRsNDdXK0lPRUpQZmV5QVJyK0NCT2lHb0Y0RHlsQ3F4CnYzMm9qUkp1enhYUDVaa0ZqaFdrbjZ3RGlQRDNaTm1WQkFCWVZqdVpzM1J3U2dZNzJ0dUMxSWdRRk1TdUlnQ2VEMERFd3dNOXplQ08KOFVKK1FnT3JUQnh1OG91VjlHZVgzSUxyWU91aC9oQUFkYXZCMmdHb2ZES0lsRXpkTWlLTFlGcnB4YVc4eHJmMndUY2M1cW5jaFJ5MwpnSmgwZUNTV0tBOUV2VkZodlJ6Z08wRlNLcjZ2VlNDd1p3cW5jOXdnbkdCTFg4NTg0ZldzYllCTDlPYldSTFRzak5VYkZk'+
			'WitFUTFiCkFFaUhCenBTNE13YUswd1hOemtMc0ZKalJmMlZmRWtIQTFyVHZYMmhvTGhPVTFpUENJVElsNVRyZDZSajRKcis0L3k4NXM4SHJ2YjIKTjVnVURkK0gyK2FaWXJZRUJuUW5EclFIZVFIcGFnRkFVRTZFaVpEYVcrN2JKd2pnUmZPa2Focll6RFRZYXMwNXE4MGJZSUJNYit4dApTRlRsaHJZY0FBUk9zQUFSWWtPOE1VNEFYbVQ1b0s2eGtvR3JubEFhbm1KYWRvUlhMb3hVMVRpSXp4TWlQZHliVEZRRXhYVkFVT3ZECjFDbzhBRkcrWjI5N0VnQnRqaHhxZkQycFdjdFRJUnNzajFmdkV5SFcxNWlLdVFQWEZPdHZtNTZ1eWd2VXlJVzFBUkN1QklrUWt3M1gKOXlraUFKcE0vRXAzMGZoK1pLdkZRQl'+
			'N2Uy8vYWp0NUd0M3Jka2JwdDU3TW5lVGsxc3VVY1VGa0trM3Zhamd5NUI2aThzLzBKK1NNZApwcm5WQU94czZFdExDVytLbTNCa1QwdmpmREZVSzZTMVBuK3VkZ0I4dEVWUnVuRjNjNE4zaE5Kbzc3YmU1bHFxY25VMUYzNVBjMUd5CnF5V1ZtTjlRYnFnV0FLb0VJQmEvZFVkQ0RoMlZJRzBwOFN1MGxzUTdCaWFtSEtGQ0VkYmtqZFNDV0ZVbGFFZkhMVU1iS3Nwc1FrdEcKcnUrWG8wRnFyQTVMVUNzQVFRQXFLamNNdFNkcXVIcUwydTE3dXJkVitJTTFqc242QWFnTWdxVm8vSjI3RXNxNnI5Nnl0ajIxdnpkVQpLNnpaRXRUR0FhRWxsVVBkaDNkY2F3RUFnTWJZa1VGUnJxZ1NiQkVBRmVRVHVTM1pGci9X'+
			'eExzRTlEUTNKSVBvUkt4VkM5UXFBcDRDCmpNVGV0Uy8rTmhBQUFEamMxOXRXZjdGMC9TZUhueDhqaWNwQXE3elZUNlJkWjJ1UWU1cXBVbSt0Y0wwQWtFQUUvT2hyZzNOek5xK2wKb3ZmdVU1UVErVnNxQW1WbDgzYlFnQUNBa3ZYR0pac0VDWEt4dHI3Vk1vNGhOOWdnejExWTBxODE2UURnc0djbW54cXphTDBpc0g1WAoySDhzdmdnUm9vbS9QVzdTajR6ME4xMWI4bFhyNmJGdnZuSytFT1FvaEZwTHBlczlsVUJCRWlrazBZZ2tVa2doSVN2YlV5MnhkVjYvClJjMTB4akpGa3hzb0lJOGNjc2dqaHp3S01OWjdodzA4WGQ1MHhoZkhGNjh0QUFDcTZtZTF0dlhyQUw4NndZSmxwMWY1bjJHczJoaE0KYncyQU'+
			'NjdGZDYkxlVmdzSE1HL0JvUUVkRWdUNFM5aXViWE5nb0FUTld3cGx3YXB0YU5ZUGdMKzJUQS8wTElPeUVSSGFsTVpnb1lRaQppdDVpS0ROWXk3TEpBUEFRQUg2aTFrSGtiUUNBQ2MxYkRLVjdBR3daQnpCWXdUb01kODlmV25QdG1yc1NxQVN0WWpuY2xvcUEvL2dKCkJndksyd0lBQTVyM05yWlNDYnBqN241eXdUQWd2eTBBTUwwbHY1Wm5CYlpRQ2JxTmVXdXcvYVZMMXhZQTJ5UGNndTA5SzZpbUVuMXQKSE9BRDRmNW9qV0hIRmdIQWx2MmJwcHI4azlvSUlFRkVVUDVYV2RjZWdQQjZzSnI5d2RvSklGWHZhOTBxcXVmWHVqTS9nKzEvQVJsMAp0ajVmOVo5d0FBQUFDSFJGV0hSRGIyMXRaVzUwQVBiTWxy'+
			'OEFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TVRrdE1ETXRNVEJVCk1qQTZNelU2TWpVck1ETTZNREJzNzc0NUFBQUFKWFJGV0hSa1lYUmxPbTF2WkdsbWVRQXlNREU1TFRBekxURXdWREl3T2pNMU9qSTEKS3pBek9qQXdIYklHaFFBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+Cjwvc3ZnPgo=';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_node_visited;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -18px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style[domTransition]='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_visited.style[domTransition]='none';
			} else {
				me._ht_node_visited.style[domTransition]='all 300ms ease-out 0ms';
			}
			me._ht_node_visited.ggParameter.sx=1.1;me._ht_node_visited.ggParameter.sy=1.1;
			me._ht_node_visited.style[domTransform]=parameterToTransform(me._ht_node_visited.ggParameter);
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
		}
		me._ht_node_visited.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_visited.style[domTransition]='none';
			} else {
				me._ht_node_visited.style[domTransition]='all 300ms ease-out 0ms';
			}
			me._ht_node_visited.ggParameter.sx=1;me._ht_node_visited.ggParameter.sy=1;
			me._ht_node_visited.style[domTransform]=parameterToTransform(me._ht_node_visited.ggParameter);
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_visited);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMTJweCIgdmlld0JveD0iMCAwIDEyOCAxMTIiIGVuYWJsZS'+
			'1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTEyIiB4PSIwIiB5PSIwIgogICAgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUJ3Q0FRQUFBQjhwYkJaQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFKY0VoWgpjd0FBRHNNQUFBN0RBY2R2cUdRQUFCbE9TVVJCVkhqYTVWMTVi'+
			'RnpIZWYvTnZHc3Y3cExMUXp4RmlvY09pcnBzeTNac1dZNlBPSzdqCnhFMlFPSW1kdzdWck5DalNwR2phSm0zYUluQ2JHa2lQcEdsNklHaUJGbWphRkEyS0pxZ0ROMDNUTkxialU1WXRTN0pGVWlJcGlhUW8KY3NtOTNyNTdwbis4WTk4dUQzR1hwT1MwczFpK2ZmdU9uZTgzMy8zTlBBTC96eHU1UnI5SnZMOXU0MVh2LzdNQUVCQVEwTkNMZ0lDRApWYno0MVFUaGFnSkFRQ0dBUW9RQUFZSzNCVGdjMkxCaHc0RUR4NFBoS2pYeHFoSHZraTlBZ2dnSkVpU0lWRllpaE5xV3FjR0NDY3VECndZWURBbloxK09EcUFPQVRMM3JFSzVERmFIL3YwSTc3anlTaUo4OSs3My9PVFJwRldEQmhnb0o2dkhCVitHRHJSY0'+
			'FmZTU5NEdUS1UKcHBaYnJ2dXRUKzdwYTB4UXFobW5KLzdsdi83dWUvTnpUSWNCRTViSEM0Nm5FYmEwQ1Z0TVBnV3RJRDJDaUJEdjYvL1ZoMy9uMGQxOQpzUWdoZ0NSMnR0dzAwdE94V0xxNHdBbjhsMjhwdHRndWJDVUFaYWwzMlY1QkZKR0dsanR2L2JQUFBYQmJVd01KY1o4aTdSODhQQ3hFCkppK3JobWNicUVmK0Z2UG8xZ0ZBS3NaZVFRUVJNZEhkKzl1UC9mcER3MzJ5QkE0R0d5WWNjQkFRUWxvYmI5blgzbjVKbTE5aVBDQSsKN0MzOFRBSGdTcjAvOWhGRVNMU2grZDdiLytpejc3MjF0WkVRTUc1bzJYT1hYNTJieTlwbUhJSUFTa2hFSHVtL2VkL3MwblRHY2dJZQpJQlh1MHM4RUFLUkM1U2xRRUJF'+
			'VGZUdSsrSXVmK2ZEK0FWa0NoMjBWenN6OHpkbXZqdi9kMUZPWGZwSjF6RTRhRTRrQUt0QnRxWnRICnV0dlBUQmQwQnBDSzE1YTB6UWFBaE1aZTlzYytubjdnN2kvOTBnTzMrV09mVy9qKzVKZkgvbmx5WWk2Zld5cE01bDh1ekdvZHJGa1MKUlZCQ0doUDdCdy91THRtVDh6WUx2TVdmRVFCOGF4OGFleUhSUC9DRlgvak1nd2VISk5FZCs5R1piNHgvN2V5Sldhc0FDdzRjV01YUwpxY0pyYXR6cGxpSWlFVUFrY1VmSGpYczd0NDFmeW1rY25qQ0VPV0VUaFdIekFBanJmTS9na1ZpczZZUDMvdFlqSDdxek9VVUlISzVsCk0wOU4vTUhZdjAzTlo3Z0c1bEhDNFRqbVRPa2xWVFU3U0pOSUJaY1BEdTBhN25mST'+
			'JVczJCd0VGUEJnMldTbHVGZ0MremhkZFJ3Y0sKSWlRMnRQTlhQL2E1aHc3dUZBVndXSGJ1ek14Zm5QM3EyVGRtelFLeENTOGJld0xDWWVmMTQ4WFRwYVRUU1JTUmlDQ2lNTkI5ODBoVAowL21GeFdKZ0dDdlY0dHNFZ0xEY0s1N2tSK05OSDNqM0Z4OTk2SjdHQkFFWTlLV0ZwODQrY2VaZnp5OHVjaDBPV1hZTEFJNWxUaFNmCnp5OXAzYlJKb2lJb0ljbjR6WHVIK3kwK01XZXhJSmJjVkx1d2NRQ3E3YjJDS0lrTjcvN1VnNS8vK1A0QlFYRGwvczNaYjR4LzdkeXAKT2F2SXJYQzN3eFJ3Z01IT2E2K1hUbWdKMWlrb0VoRkFLTjNSY2N2K2VHSXV0MUJZQnNBbWNNTEdBQ0JlZUJ0U2VvZzJOTC9uenQ5NQo3'+
			'S1B2U2ljSkFlTjZQdlBVMUpkSHZ6dVZXV1M2SDk2c3lBRUFDSWRqbXVmVkY0dDVzNWMwdXZxQUp1TTM3ZDB6Y01tYWMvMERnckNQClNEYkdCeHNCb05ya0tZalMyUENlWC96QTd6NDYwaTk3T3YvTm1hK2YvZnI0RzdObUhqYmh5MDM3Q3A4WnMvUGFhOFZSTGVXMGk0b0UKQVVRVStqcU9YQWVjbVRhc3FwdHNrQS9xQmFBYzRjbWVueDlCTk5WNng1RW5mL25CdTVvYUtBSGorbExtNmNrblJyODNOWitCWGhuYQpyc29CN2w4T3h6TE9xUytxbXJWRFNJaFVBS0UwSGJ0dTE5NkJxWVdGZ3NNclRDTTJZaHJyQTZBczk3THY3Z2lKSGJ0KytjRXZQVDdjCjYvdDZiODE4WS94cjR5ZG1qU0t4d1ZmaVZRTHV2WW'+
			'1YRHZURFB3SXdaaTJXanF2bnRCYTdsVW9Tb1NDeHlKN2VHNFpqOGRFWjNlYW8KY3BYcjVJUGFBVmpCMTBPMG9lM29PLzd3TXcvZTNweHc1VDZYK2MvSkowZS9NN1hveVgyMTJsNnB0OVh3Y0E3SDBFY0x6eGRzczB0bwpFS2tBUW1oSDg0M0RPN3JuQzVleUsvTEJsZ093UW54UDQ5MzluMzc0aTQ4ZTZsVkVBTFpUR0ozNXkvRS9QZnZxakZtQTdkSzFHc3RYCjd5LzduakZyc2ZTeWVrNXZjZG9GU1lJQUVwSDNEUnphSlVYR1p6VXpGRExWS1FpMUFFQTg4cXZpKzNmZSt1VG5QbkpiV3dNaFlORHoKbWFjbm54ajl6dVI4aGhza2lHZkt0MWg5djlxLzhmWTVITU1ZTGJ4WU1LMGVLU2tURVlTUWp1WmI5M2R0'+
			'V3lwTkwvTHFtOVJvRjlZUApRS1c3b3lDQ0NFMTA5djcyWTcveDBNRStSUUtINHhRbVovOTg3RS9IVDh5YVJWaWI2TEV6Wm1WS3I2b1hyVzdTSW9vQ0tJZ2k3ZXUvCmZ0Z1JMeXlvcHVjcTE1VS9XQzhBdENyRWpTQXFKKzk2NSs5OTlzTzN0alpTQWdham1QbngxSmRIdnoxNU9jTjBPTnpya2I5MVc3VU8KQ08venFyNVhYTW5obEl4UjlaZ3FtVjNFRFowcDNaWStlaWlWUEgxUjFabmJ4enEwd1hvQUlGVXhYZ1JSRXUzcytlQzd2L1RvTFRzVgpDUnkyclU3TS9zMzRWOFplbXRFOWUxOUphTDA2b09JYnh6Wm1peS9rcDdVTzNpS0tBZ1JDSXRKSS93M0RTNldMR1p1aDBxbllKQURLCmpDOEhKaStxcEE0Zi'+
			't2d2puLzFRVjR0cjd6UHpQNXo2eXRsL25Kak5NSjJ3U3JkbXVkZHlSVWRvOVgwT1c5Vk9GNCtwb3RXSm1FZ0YKVUZuc2E3OXBiK2UyMFptQ1VlVWkwWTBEUUplTmZZVEdPN3ZmLzY2dmZQcjJnN0VJQVJ5N09ESDc5ZEUvSGo4K3ErV0pCVjZwaUVtSQpzV3YwQTBKYlYwQzhjNWx0WFZKZkxyeWxOanRka2loQ0lLU3A0ZURReUpCbVQxNjJPZnppMnpyNVlDMEFLT2l5K0w3eDZMMi8rOWluCjN0dlZLZ2hnM0Nncy9lakNrMlAvT25rNXczVGloT1cya3RpNi9JRFZ6dVRjVnZVemhaTWx3ZW1pTVprSW9KSTQwSFhqM3JhV3BkS2kKYXZObENaUTF6T05xQUpUbHZpcSsvOEpETisyS0tZVEFkZ29Uczk4Y2Yz'+
			'TDgySXhXZ0FVZU5tN1ZuelpGQjRTL1pjeWFLNzJvVGhzRApRdG9MblJzYmJoeSs2OGE4T2IxVUN2c0hWekNLS3dNUXp1ZkxycS9ueC9mTkNRb3c2TVhNanlaL2YvU2ZKdWZudVVhY3NDMnYvTFF4ClA0QXMydysrNWR4UjlWUHFhUzFoZDNrcEZJRTJwNDRlR2g0WXU3U2tCbjdpU3JkZUU0Q3d6bmRUMmdxSnQ3Ui8vSDFQUEw1L1FCQUEKT0k1NmJ1YXZ4Nzh5Zm16V0tNRG1uQVRTQ25pU0d4VENPUVZaWFJoOUhSQzZzdHdQeWlrSitmdit1YUd6SE1jNnI3NVlXTlE3aGJSQwpSVkFnSWc5MjMzYkl3WnNYTE1jYnpESjdyY0FMMVFENGNpLzZjbytva2p3dzh1U25IN212UFUwSUFHYXF6MTE0NHN5M0p5NH'+
			'R1SElQCkVJQVFRaWh4YS80Q29lN1ZjaUthaU1YU1ZIY1lXNW05ZVVVOEUwNzdDZUsybUp3VTRsUm1JaEdKQUFwQ0NDaHhBU1dCS05pNTBnbjEKVGJOZjZveFJHUVFRYUZ2VGRidEVaUzYvV0ZqQnJDenJRd1htZ2NQakFpRFRhR1BMSis3L3hIMGovWkpmUnphUFQzL21qUmNuN0FMcwo0SllDRnlpVkpDcFJtaVFTbGFSdDBlYW9LQTNIdGtjVTgrTDAxNllYUzI0NHZHNUhpRVFqajdWZjMyTkVMK3FuTmRNdW1oZEx1bUU3Ck9lWXdadHNXWjJERUFmY1NxNktVUERyd0p5UDdPeUQ3TjlDTUh4Ly80bCtmZXNzc3dJQVpLcjVYelQ0b2w4ZHBFT2dFcWs5cE9ERDgKdVlmdnZLRWxGWUtKbmRWSFM3Wk5SQ29R'+
			'S3NrUlNSQ2JJK2xZVE5rYmE0NG80bDZ4Z1VwU1d5d2RJYUlpUzFSYmZESlhXcGRGcm13bQpLY1RlMDUxcXRibGhNVWMxWnpSZFY1MDM3YUtWMVU5cHFybW9MMmpNTWt6REJHZXc3RGZVS1gxL2lNV2p5dDJIV3hxLzlmVGZmeSsvCnlEUUlFR0FGcGZmUTdBTWZnSEw5UGhqN2RPc2pEM3owbm9PRHRMTDd3czNKajNZK0s2V2Q3VVNSdHNXR0U3TGNHV21QQ1hLRElrbUUKU3BUNE0wRUlDS3dNZTBiVHJab3IvWnl4TS9ZOG1tT2lIT0ZBRSt0MndEaTdpM0hIdGdxbWJWMHlaa3EyUGxvOHI4TEo4SFBDMGRaRApEWlVDTFFtSGQvZDNYcmY3TC8vbCtFbXpDQUdDNXg5UTJJQVBnVmdoK1VIOVhrN2NkUER4OT'+
			'cvM1NHTmlXZGZFenZUdlNRdTlNWjRrClZCQVZSU0h1cEpleTZ4SFdoL2FKM05rQ3Q5MnZlZWhBdGZ4VnBrY0p1RE9tdmxiWVpSRUZGSUFBQ1NCY0JyaUNPQWZyWnJEaEdMcGwKZ21sOENTM1JwdVJ5bGQ2Yy9OZzl3MzNmZXZvZi9uMXh3ZU1EQWFiM3d3emNCWUNFQ2hvS0ZDak5iUis3LzVQM0hSaWlLNmx2UWlOcApPYzJxdk4xVnh0RXlUdWZ5SlRqVkpGWVR6WmR2blZ6eGhZWDNkY2RpSWJMS3Z5VUFVTUNWaE1MQkUyajE2MGZMR3FVMzdCN3MzanZ3CnQ5OTk2VFZXZ2hCeWpMZ1BRTm5iajBCQnRIbmI1ei94cVo5dmlLM0tuc1NiM0JRMEI2cGQwRGhuL1BXNWszUEFZUHErb2JnTWdPWFYKNHpuRDRI'+
			'dzFUM0NOYUpEWnhzbjhVaW5HSUFDY241ci9qM0hUYVZEdTdrL0lnQ1EyUktPRXJOUGRiVXc4ZXYvK3dkLzR4ck92TURYNApFZTdPUi9NNUlQRDFJK25ISDM3OGdUWElCMGZKTHBtY2MwenowZm1sQmFDSTA5a1RFN2JEc2FBdWFFQmJMS3MvY2tpaTNKckt2NTUzCjZzd01jT2Q4NlZ5cHk0WUVqQzMrNWcvK2U5TGhNdDJla2dRZzNYaXdmNEFLRU9YZTN0MVNCSUFrSkJWaFZUZ291WDdYRno3NTJNenMKZEVDOE95TU5aUUFVUkJCRlZFa045a1NWeXN0TnAyUnhjTXdhSjZjdDI4R3JtV01URHVQSTRuS2hwQUljRG5OQ2FtNnVkQ3o3TUpPSQpyZjkwNllLbkFlb0JZS0YwT25lTEtVUkFNdnJva200RGx2UG'+
			'1BZ0NReTgrTlV3SUlRanE5VFpBQXRDWHZHVW9KUUhkNnVGa2lnRVRqClV0Z0RvN1Nubzd0dmRzbmxMaml3UVVIQVJjOWpreUFqaWloaWVmekowK21tTzNkUmF1R3llZTZTWlFObk1qK2FzQmxIeGpvMzd6Z2MKTnZPOHJGVmFRcm03THlMQ3pxby9YZFExRW9KbXJaaGcyVEZlMEg2NjlGRTFtWUN3cTJWWHk5bE1DQnp1OWNBdXpWNzB4dmdIWXhSQQphN0l2S1JLZ0ovbHpRNG9BQUYzSm9UU2xsd3RmL2VISkJjUzkwYmRod1FMS09zRGxnQmdTUFBGVzRkZWZIajRsaEFDd21HRmZrWXU1Cmh5MEgrdHVHV3ltNGZibHdOcy9yVDQweHh6eWVuUzAwcElrUW9mMUprZHZMNjBMbGs3bHVBY0JVWmlvREFBTDl6'+
			'bW4zbEs3a1VETWwKaTRWWFJqVVppWUI4MDFXYXZnaUlrQkZCREhFa2VQeWNlbTUwWGVRaW1OYks0TUNkOCttQTdJbHNqNEl6ODQzQ09aVTdhK1VEV0ZVKwpnSG8zOVRJQTlxWEM2ZXhnaDZCRXBmc0cvdkg1UlJVRUlxalhaL2UyTkhTN1VITlkwWFEvdmJYdzFnSUFEZ2x4T0xCZ3dZVGszY2Z6CkE4cE9zRlErdEFiQnZqUHBFZ3dBanBjQXQrRkU0L3Q3WkFGTVU1L0paRldzS1N4WDRnRlZIOHRidXBBZ1pGZnIzc1puTG9GQWRKMXYKYjB1QzNoTFBNcTFXS1BGVnZVdGg0TGVJSVVKc21EQmdRUElPaDhlWGVWdVhUQWUyZDUxZEFRQUhBMGszMzlZalV4Z3orVmNYbVU3VwpGSUJLSjJLNUZ0RE01L01mTD'+
			'NVNG9PME52VTNQNkxCQlBjZklCMER5QUtBQk5JSjNwT3dYVUsvdjdoUk14NXVRSGZnQjNDTmVneERnCko0RjRqTzBUekwyYnNOQStZQWRuT0dBZ0VCQTl2SE9nRFp6WmI2bFRLZytOZjQyT2tMdXhYczJONWRwYmlTUUt3OXVqc2xhQ0JZQUgKQUZDdnAyVklSRzlRL1gwWEdzQ0JoZ0lLVUtIQmdPbFRJSHBrV2pBODk4WWRlZGtEd0xvaUFMYkhBUTQ0Uk1Tb3VDT1pFZ0hUZUsyUQpOY0EzbGhZblRrWTlsbjJISWNVazRlaGdVMHJMd1lRQnRpWUFRb1dRK0o5c2FDaEFSUWthREZnZUpSREJ3ZUVFV3RIVlAwNEFRQ1hCCnEzTUFBNE1FQVVKejZ0NFJTWUNqbGw3UDZUcTV3bnlBNnYxbG5ndzNqSlA1Z3Ba'+
			'T0VuR283ZkRPNzg2QXdJWU83cEc1SGc1d0lYR2cKUS9VQTBHRjZnaENJZ0JWU2ZBeFdJQUtyQWVCNFdzRS9RanpsSWcyMEQ3WlJBbXN5OTFhV216NEhyQ1lHL0VySHVHMitucDlWMHc3RQpsTEs5aVVoY0JJVUQzVHU5bWt6WG9xME1nQUVOR2pUb0hnYzRQZ0N1Q0pROVpCdG1vQnhkSmVjVHpqMVc1N0M5Y05MOUpIamFWU0xTCjdYdTZHc0V0L2VXbG1RSnhWaHZaOVNkRjRVeVZKZ3Q3TENwTHdoMjd2L1dUeFFJRUR3SWJDTFM1Yncxb1lDYkZ3Q3FJM3JJTUV6b00KNkY2Q0pCQUJsNnh5aU9EckEzOHZUREQzMUtML3ZaK3VWNkM0K1lUbXhpTzdKUUZPWG4xK1NkWEFxcFhibFRoaEJaUEJpcVdYY25jYg'+
			'pTb3pTM1IzYldoY3ZlMmFNdy9ENjdRUGdUOHdQQStGbk9nRHVlUUJtc0RpalFnUmNQNFhCaGdqVHV3a0NnbGxBT0F2ZXpDTmVnT0xWCmpFV0lqWW5oYlpUQW5zNi9sclZOdjB4U1YxTFUzK2VtL2xvMlUreE1nbmFsait4NWN6U3c1SURsQ1NEMWpKNmY4RUFBUkJtUzhzSWMKTzFpUWdiQWZVQTRScUdkclVVRnMyWGJ5MExJbTkvYWUvQXZ5OWYzcEdEZzN4bk1YaTdBcnZiK1ZLME9WbjhJVklkOFVjdXRNZmlMZgowVWFrR04yUmttVEx6Vnk1OXA0RmpsWmxOYTBNQlBHb0tRK2pFNWgzbEZOaW5oTzdMSGNhSkE1V1dkSldzUnBFanQ0ODJCaURvNWFlClhWSzlOT2pLRTdyQ01sOCtSbFk4eXRtbDBuanhK'+
			'bE9NQ01KOUkzL1ZmS0VRSk8rRUVGS1ZGYm1WcHR1SGFRbk9MaWRGNjFtelYrbEMKU3oxdGQrd0I0TXdVWDg1YlpvMzNXdjFIdUthL2tQMkExcEFnUW1POEllN3htd2d4NE5UcVZzUEN1enJ5dFJWWDAyQUpuRWlsd2UyZApqZUJjUDdrMGx1ZTJQeEc0a29uS1BheGtxL0R4OEphRGM5czRscjJRaHcyMEorOFpFWlZBQ3dpQnR0b0FDZlUzVjlaOFpoUWs1YTQ5CjZSaVlWbm91a3kxeVZsWVZZUkxEQ29SanVZenhxaTBBenUzcHduaWVXZUNLZUgxdk1oNWFkVWhYemdSZUhRQXExNFZJMjlvUERnZ0UKTEt1ZEx0aG01V1RvTUdaMTFBYlprbjZzWUJqZ3dKR2g3clpBQks0eEFLUVNnSzdrY0JQQTdUUEY4Uk'+
			'p6YXRZbmF6VnU2QzlsaXlvYwpJTld3WjdmZ0M0Q3JCNjR4QUo0TmtDTkhkNlVpNEk1eEluZHBZMW1BRlFEZzFsUitNZzhiYUpTUGRFaXlaM2NxNnhGWEdZREtTWE9TCnFJejBSQ1d3VXVsRTFnaE5qRjFiSVZlcnh1Vkh2ZWJNRmwvTjJ5WTR3WUd1am1iL1Z6MElOdEEyQmtCNU9helkxVExZQnNDYXlMMlMKZFF5Lzcyc2xQVmVlU0xGU0daZUE4SkorTXFkcFlNRHVqcDRPNG1zQm53ZXVHUUNlTVJLVk93N3M3UVRueHRqU1hLR2NCbGtyMmxzNQpJYkxNVTRGbkNxM1hjL05GT0VBOGR0MUJNVnFoQ0s4UkFJRUhBREVTT2JvenJzQXBsWjVieXBkUWtRZ25hOTVrelpSWUNBTnVqZWRQClpXR0NSK24rUmxr'+
			'cG05K05RVkF2QUg0eDNRT2d1V2w3aWdMMjVmeFBzcnJwVnUwckxicEh4eHI3MWRxaThreXdYT25OSlVzREp4aloKM3QzaGtlK2J3cnBidlplV0o4eUxFSW00djJkdko3aGpuc3hlek5kYkNicENZNGJ4UWk2amdnRURpZDVVb0FTbGpabkNqUUJBL2VtVAowY1FkK3hJS1dFbDdOcGZWdG1yVlA3TlBsODZYWUFNSithNDlrYWhuZ1lSUTlIclZBQ0NoR0VDQ0ZJbnQ3NVFGT0hQRkYzT1dDVytDCi9FcHJtNWJQWkEzSGc5VS9VcFVrWlpkTHAvTGNBSlBGQTcwTkRZRUcySkEvdUJFQUFpVzBzMk43R3B4WjQva3orU0JkdW95b0RabEIKQUhDSzZ2TUxxZ29HRFBjTTl3YUdjRU9XWUtNQVNKQ29mTEMzdXduYz'+
			'BsNWVYQ3I2SnJCU3ZmbC82d3FHL0N1NFk3eVJtMU81QXpSSgozVWtxaG9LaXVyM0JlZ0NvbkUwbU5TYnZQNkNJY0xMRkUxbGJKM3pySmtweWRsNDdXK0lPRUpQZmV5QVJyK0NCT2lHb0Y0RHlsQ3F4CnYzMm9qUkp1enhYUDVaa0ZqaFdrbjZ3RGlQRDNaTm1WQkFCWVZqdVpzM1J3U2dZNzJ0dUMxSWdRRk1TdUlnQ2VEMERFd3dNOXplQ08KOFVKK1FnT3JUQnh1OG91VjlHZVgzSUxyWU91aC9oQUFkYXZCMmdHb2ZES0lsRXpkTWlLTFlGcnB4YVc4eHJmMndUY2M1cW5jaFJ5MwpnSmgwZUNTV0tBOUV2VkZodlJ6Z08wRlNLcjZ2VlNDd1p3cW5jOXdnbkdCTFg4NTg0ZldzYllCTDlPYldSTFRzak5VYkZk'+
			'WitFUTFiCkFFaUhCenBTNE13YUswd1hOemtMc0ZKalJmMlZmRWtIQTFyVHZYMmhvTGhPVTFpUENJVElsNVRyZDZSajRKcis0L3k4NXM4SHJ2YjIKTjVnVURkK0gyK2FaWXJZRUJuUW5EclFIZVFIcGFnRkFVRTZFaVpEYVcrN2JKd2pnUmZPa2Focll6RFRZYXMwNXE4MGJZSUJNYit4dApTRlRsaHJZY0FBUk9zQUFSWWtPOE1VNEFYbVQ1b0s2eGtvR3JubEFhbm1KYWRvUlhMb3hVMVRpSXp4TWlQZHliVEZRRXhYVkFVT3ZECjFDbzhBRkcrWjI5N0VnQnRqaHhxZkQycFdjdFRJUnNzajFmdkV5SFcxNWlLdVFQWEZPdHZtNTZ1eWd2VXlJVzFBUkN1QklrUWt3M1gKOXlraUFKcE0vRXAzMGZoK1pLdkZRQl'+
			'N2Uy8vYWp0NUd0M3Jka2JwdDU3TW5lVGsxc3VVY1VGa0trM3Zhamd5NUI2aThzLzBKK1NNZApwcm5WQU94czZFdExDVytLbTNCa1QwdmpmREZVSzZTMVBuK3VkZ0I4dEVWUnVuRjNjNE4zaE5Kbzc3YmU1bHFxY25VMUYzNVBjMUd5CnF5V1ZtTjlRYnFnV0FLb0VJQmEvZFVkQ0RoMlZJRzBwOFN1MGxzUTdCaWFtSEtGQ0VkYmtqZFNDV0ZVbGFFZkhMVU1iS3Nwc1FrdEcKcnUrWG8wRnFyQTVMVUNzQVFRQXFLamNNdFNkcXVIcUwydTE3dXJkVitJTTFqc242QWFnTWdxVm8vSjI3RXNxNnI5Nnl0ajIxdnpkVQpLNnpaRXRUR0FhRWxsVVBkaDNkY2F3RUFnTWJZa1VGUnJxZ1NiQkVBRmVRVHVTM1pGci9X'+
			'eExzRTlEUTNKSVBvUkt4VkM5UXFBcDRDCmpNVGV0Uy8rTmhBQUFEamMxOXRXZjdGMC9TZUhueDhqaWNwQXE3elZUNlJkWjJ1UWU1cXBVbSt0Y0wwQWtFQUUvT2hyZzNOek5xK2wKb3ZmdVU1UVErVnNxQW1WbDgzYlFnQUNBa3ZYR0pac0VDWEt4dHI3Vk1vNGhOOWdnejExWTBxODE2UURnc0djbW54cXphTDBpc0g1WAoySDhzdmdnUm9vbS9QVzdTajR6ME4xMWI4bFhyNmJGdnZuSytFT1FvaEZwTHBlczlsVUJCRWlrazBZZ2tVa2doSVN2YlV5MnhkVjYvClJjMTB4akpGa3hzb0lJOGNjc2dqaHp3S01OWjdodzA4WGQ1MHhoZkhGNjh0QUFDcTZtZTF0dlhyQUw4NndZSmxwMWY1bjJHczJoaE0KYncyQU'+
			'NjdGZDYkxlVmdzSE1HL0JvUUVkRWdUNFM5aXViWE5nb0FUTld3cGx3YXB0YU5ZUGdMKzJUQS8wTElPeUVSSGFsTVpnb1lRaQppdDVpS0ROWXk3TEpBUEFRQUg2aTFrSGtiUUNBQ2MxYkRLVjdBR3daQnpCWXdUb01kODlmV25QdG1yc1NxQVN0WWpuY2xvcUEvL2dKCkJndksyd0lBQTVyM05yWlNDYnBqN241eXdUQWd2eTBBTUwwbHY1Wm5CYlpRQ2JxTmVXdXcvYVZMMXhZQTJ5UGNndTA5SzZpbUVuMXQKSE9BRDRmNW9qV0hIRmdIQWx2MmJwcHI4azlvSUlFRkVVUDVYV2RjZWdQQjZzSnI5d2RvSklGWHZhOTBxcXVmWHVqTS9nKzEvQVJsMAp0ajVmOVo5d0FBQUFDSFJGV0hSRGIyMXRaVzUwQVBiTWxy'+
			'OEFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TVRrdE1ETXRNVEJVCk1qQTZNelU2TWpVck1ETTZNREJzNzc0NUFBQUFKWFJGV0hSa1lYUmxPbTF2WkdsbWVRQXlNREU1TFRBekxURXdWREl3T2pNMU9qSTEKS3pBek9qQXdIYklHaFFBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+Cjwvc3ZnPgo=';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_node_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMTJweCIgdmlld0JveD0iMCAwIDEyOCAxMTIiIGVuYWJsZS'+
			'1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTEyIiB4PSIwIiB5PSIwIgogICAgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUJ3Q0FRQUFBQjhwYkJaQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFKY0VoWgpjd0FBRHNNQUFBN0RBY2R2cUdRQUFCbE9TVVJCVkhqYTVWMTVi'+
			'RnpIZWYvTnZHc3Y3cExMUXp4RmlvY09pcnBzeTNac1dZNlBPSzdqCnhFMlFPSW1kdzdWck5DalNwR2phSm0zYUluQ2JHa2lQcEdsNklHaUJGbWphRkEyS0pxZ0ROMDNUTkxialU1WXRTN0pGVWlJcGlhUW8KY3NtOTNyNTdwbis4WTk4dUQzR1hwT1MwczFpK2ZmdU9uZTgzMy8zTlBBTC96eHU1UnI5SnZMOXU0MVh2LzdNQUVCQVEwTkNMZ0lDRApWYno0MVFUaGFnSkFRQ0dBUW9RQUFZSzNCVGdjMkxCaHc0RUR4NFBoS2pYeHFoSHZraTlBZ2dnSkVpU0lWRllpaE5xV3FjR0NDY3VECndZWURBbloxK09EcUFPQVRMM3JFSzVERmFIL3YwSTc3anlTaUo4OSs3My9PVFJwRldEQmhnb0o2dkhCVitHRHJSY0'+
			'FmZTU5NEdUS1UKcHBaYnJ2dXRUKzdwYTB4UXFobW5KLzdsdi83dWUvTnpUSWNCRTViSEM0Nm5FYmEwQ1Z0TVBnV3RJRDJDaUJEdjYvL1ZoMy9uMGQxOQpzUWdoZ0NSMnR0dzAwdE94V0xxNHdBbjhsMjhwdHRndWJDVUFaYWwzMlY1QkZKR0dsanR2L2JQUFBYQmJVd01KY1o4aTdSODhQQ3hFCkppK3JobWNicUVmK0Z2UG8xZ0ZBS3NaZVFRUVJNZEhkKzl1UC9mcER3MzJ5QkE0R0d5WWNjQkFRUWxvYmI5blgzbjVKbTE5aVBDQSsKN0MzOFRBSGdTcjAvOWhGRVNMU2grZDdiLytpejc3MjF0WkVRTUc1bzJYT1hYNTJieTlwbUhJSUFTa2hFSHVtL2VkL3MwblRHY2dJZQpJQlh1MHM4RUFLUkM1U2xRRUJF'+
			'VGZUdSsrSXVmK2ZEK0FWa0NoMjBWenN6OHpkbXZqdi9kMUZPWGZwSjF6RTRhRTRrQUt0QnRxWnRICnV0dlBUQmQwQnBDSzE1YTB6UWFBaE1aZTlzYytubjdnN2kvOTBnTzMrV09mVy9qKzVKZkgvbmx5WWk2Zld5cE01bDh1ekdvZHJGa1MKUlZCQ0doUDdCdy91THRtVDh6WUx2TVdmRVFCOGF4OGFleUhSUC9DRlgvak1nd2VISk5FZCs5R1piNHgvN2V5Sldhc0FDdzRjV01YUwpxY0pyYXR6cGxpSWlFVUFrY1VmSGpYczd0NDFmeW1rY25qQ0VPV0VUaFdIekFBanJmTS9na1ZpczZZUDMvdFlqSDdxek9VVUlISzVsCk0wOU4vTUhZdjAzTlo3Z0c1bEhDNFRqbVRPa2xWVFU3U0pOSUJaY1BEdTBhN25mST'+
			'JVczJCd0VGUEJnMldTbHVGZ0MremhkZFJ3Y0sKSWlRMnRQTlhQL2E1aHc3dUZBVndXSGJ1ek14Zm5QM3EyVGRtelFLeENTOGJld0xDWWVmMTQ4WFRwYVRUU1JTUmlDQ2lNTkI5ODBoVAowL21GeFdKZ0dDdlY0dHNFZ0xEY0s1N2tSK05OSDNqM0Z4OTk2SjdHQkFFWTlLV0ZwODQrY2VaZnp5OHVjaDBPV1hZTEFJNWxUaFNmCnp5OXAzYlJKb2lJb0ljbjR6WHVIK3kwK01XZXhJSmJjVkx1d2NRQ3E3YjJDS0lrTjcvN1VnNS8vK1A0QlFYRGwvczNaYjR4LzdkeXAKT2F2SXJYQzN3eFJ3Z01IT2E2K1hUbWdKMWlrb0VoRkFLTjNSY2N2K2VHSXV0MUJZQnNBbWNNTEdBQ0JlZUJ0U2VvZzJOTC9uenQ5NQo3'+
			'S1B2U2ljSkFlTjZQdlBVMUpkSHZ6dVZXV1M2SDk2c3lBRUFDSWRqbXVmVkY0dDVzNWMwdXZxQUp1TTM3ZDB6Y01tYWMvMERnckNQClNEYkdCeHNCb05ya0tZalMyUENlWC96QTd6NDYwaTk3T3YvTm1hK2YvZnI0RzdObUhqYmh5MDM3Q3A4WnMvUGFhOFZSTGVXMGk0b0UKQVVRVStqcU9YQWVjbVRhc3FwdHNrQS9xQmFBYzRjbWVueDlCTk5WNng1RW5mL25CdTVvYUtBSGorbExtNmNrblJyODNOWitCWGhuYQpyc29CN2w4T3h6TE9xUytxbXJWRFNJaFVBS0UwSGJ0dTE5NkJxWVdGZ3NNclRDTTJZaHJyQTZBczk3THY3Z2lKSGJ0KytjRXZQVDdjCjYvdDZiODE4WS94cjR5ZG1qU0t4d1ZmaVZRTHV2WW'+
			'1YRHZURFB3SXdaaTJXanF2bnRCYTdsVW9Tb1NDeHlKN2VHNFpqOGRFWjNlYW8KY3BYcjVJUGFBVmpCMTBPMG9lM29PLzd3TXcvZTNweHc1VDZYK2MvSkowZS9NN1hveVgyMTJsNnB0OVh3Y0E3SDBFY0x6eGRzczB0bwpFS2tBUW1oSDg0M0RPN3JuQzVleUsvTEJsZ093UW54UDQ5MzluMzc0aTQ4ZTZsVkVBTFpUR0ozNXkvRS9QZnZxakZtQTdkSzFHc3RYCjd5LzduakZyc2ZTeWVrNXZjZG9GU1lJQUVwSDNEUnphSlVYR1p6VXpGRExWS1FpMUFFQTg4cXZpKzNmZSt1VG5QbkpiV3dNaFlORHoKbWFjbm54ajl6dVI4aGhza2lHZkt0MWg5djlxLzhmWTVITU1ZTGJ4WU1LMGVLU2tURVlTUWp1WmI5M2R0'+
			'V3lwTkwvTHFtOVJvRjlZUApRS1c3b3lDQ0NFMTA5djcyWTcveDBNRStSUUtINHhRbVovOTg3RS9IVDh5YVJWaWI2TEV6Wm1WS3I2b1hyVzdTSW9vQ0tJZ2k3ZXUvCmZ0Z1JMeXlvcHVjcTE1VS9XQzhBdENyRWpTQXFKKzk2NSs5OTlzTzN0alpTQWdham1QbngxSmRIdnoxNU9jTjBPTnpya2I5MVc3VU8KQ08venFyNVhYTW5obEl4UjlaZ3FtVjNFRFowcDNaWStlaWlWUEgxUjFabmJ4enEwd1hvQUlGVXhYZ1JSRXUzcytlQzd2L1RvTFRzVgpDUnkyclU3TS9zMzRWOFplbXRFOWUxOUphTDA2b09JYnh6Wm1peS9rcDdVTzNpS0tBZ1JDSXRKSS93M0RTNldMR1p1aDBxbllKQURLCmpDOEhKaStxcEE0Zi'+
			't2d2puLzFRVjR0cjd6UHpQNXo2eXRsL25Kak5NSjJ3U3JkbXVkZHlSVWRvOVgwT1c5Vk9GNCtwb3RXSm1FZ0YKVUZuc2E3OXBiK2UyMFptQ1VlVWkwWTBEUUplTmZZVEdPN3ZmLzY2dmZQcjJnN0VJQVJ5N09ESDc5ZEUvSGo4K3ErV0pCVjZwaUVtSQpzV3YwQTBKYlYwQzhjNWx0WFZKZkxyeWxOanRka2loQ0lLU3A0ZURReUpCbVQxNjJPZnppMnpyNVlDMEFLT2l5K0w3eDZMMi8rOWluCjN0dlZLZ2hnM0Nncy9lakNrMlAvT25rNXczVGloT1cya3RpNi9JRFZ6dVRjVnZVemhaTWx3ZW1pTVprSW9KSTQwSFhqM3JhV3BkS2kKYXZObENaUTF6T05xQUpUbHZpcSsvOEpETisyS0tZVEFkZ29Uczk4Y2Yz'+
			'TDgySXhXZ0FVZU5tN1ZuelpGQjRTL1pjeWFLNzJvVGhzRApRdG9MblJzYmJoeSs2OGE4T2IxVUN2c0hWekNLS3dNUXp1ZkxycS9ueC9mTkNRb3c2TVhNanlaL2YvU2ZKdWZudVVhY3NDMnYvTFF4ClA0QXMydysrNWR4UjlWUHFhUzFoZDNrcEZJRTJwNDRlR2g0WXU3U2tCbjdpU3JkZUU0Q3d6bmRUMmdxSnQ3Ui8vSDFQUEw1L1FCQUEKT0k1NmJ1YXZ4Nzh5Zm16V0tNRG1uQVRTQ25pU0d4VENPUVZaWFJoOUhSQzZzdHdQeWlrSitmdit1YUd6SE1jNnI3NVlXTlE3aGJSQwpSVkFnSWc5MjMzYkl3WnNYTE1jYnpESjdyY0FMMVFENGNpLzZjbytva2p3dzh1U25IN212UFUwSUFHYXF6MTE0NHN5M0p5NH'+
			'R1SElQCkVJQVFRaWh4YS80Q29lN1ZjaUthaU1YU1ZIY1lXNW05ZVVVOEUwNzdDZUsybUp3VTRsUm1JaEdKQUFwQ0NDaHhBU1dCS05pNTBnbjEKVGJOZjZveFJHUVFRYUZ2VGRidEVaUzYvV0ZqQnJDenJRd1htZ2NQakFpRFRhR1BMSis3L3hIMGovWkpmUnphUFQzL21qUmNuN0FMcwo0SllDRnlpVkpDcFJtaVFTbGFSdDBlYW9LQTNIdGtjVTgrTDAxNllYUzI0NHZHNUhpRVFqajdWZjMyTkVMK3FuTmRNdW1oZEx1bUU3Ck9lWXdadHNXWjJERUFmY1NxNktVUERyd0p5UDdPeUQ3TjlDTUh4Ly80bCtmZXNzc3dJQVpLcjVYelQ0b2w4ZHBFT2dFcWs5cE9ERDgKdVlmdnZLRWxGWUtKbmRWSFM3Wk5SQ29R'+
			'S3NrUlNSQ2JJK2xZVE5rYmE0NG80bDZ4Z1VwU1d5d2RJYUlpUzFSYmZESlhXcGRGcm13bQpLY1RlMDUxcXRibGhNVWMxWnpSZFY1MDM3YUtWMVU5cHFybW9MMmpNTWt6REJHZXc3RGZVS1gxL2lNV2p5dDJIV3hxLzlmVGZmeSsvCnlEUUlFR0FGcGZmUTdBTWZnSEw5UGhqN2RPc2pEM3owbm9PRHRMTDd3czNKajNZK0s2V2Q3VVNSdHNXR0U3TGNHV21QQ1hLRElrbUUKU3BUNE0wRUlDS3dNZTBiVHJab3IvWnl4TS9ZOG1tT2lIT0ZBRSt0MndEaTdpM0hIdGdxbWJWMHlaa3EyUGxvOHI4TEo4SFBDMGRaRApEWlVDTFFtSGQvZDNYcmY3TC8vbCtFbXpDQUdDNXg5UTJJQVBnVmdoK1VIOVhrN2NkUER4OT'+
			'cvM1NHTmlXZGZFenZUdlNRdTlNWjRrClZCQVZSU0h1cEpleTZ4SFdoL2FKM05rQ3Q5MnZlZWhBdGZ4VnBrY0p1RE9tdmxiWVpSRUZGSUFBQ1NCY0JyaUNPQWZyWnJEaEdMcGwKZ21sOENTM1JwdVJ5bGQ2Yy9OZzl3MzNmZXZvZi9uMXh3ZU1EQWFiM3d3emNCWUNFQ2hvS0ZDak5iUis3LzVQM0hSaWlLNmx2UWlOcApPYzJxdk4xVnh0RXlUdWZ5SlRqVkpGWVR6WmR2blZ6eGhZWDNkY2RpSWJMS3Z5VUFVTUNWaE1MQkUyajE2MGZMR3FVMzdCN3MzanZ3CnQ5OTk2VFZXZ2hCeWpMZ1BRTm5iajBCQnRIbmI1ei94cVo5dmlLM0tuc1NiM0JRMEI2cGQwRGhuL1BXNWszUEFZUHErb2JnTWdPWFYKNHpuRDRI'+
			'dzFUM0NOYUpEWnhzbjhVaW5HSUFDY241ci9qM0hUYVZEdTdrL0lnQ1EyUktPRXJOUGRiVXc4ZXYvK3dkLzR4ck92TURYNApFZTdPUi9NNUlQRDFJK25ISDM3OGdUWElCMGZKTHBtY2MwenowZm1sQmFDSTA5a1RFN2JEc2FBdWFFQmJMS3MvY2tpaTNKckt2NTUzCjZzd01jT2Q4NlZ5cHk0WUVqQzMrNWcvK2U5TGhNdDJla2dRZzNYaXdmNEFLRU9YZTN0MVNCSUFrSkJWaFZUZ291WDdYRno3NTJNenMKZEVDOE95TU5aUUFVUkJCRlZFa045a1NWeXN0TnAyUnhjTXdhSjZjdDI4R3JtV01URHVQSTRuS2hwQUljRG5OQ2FtNnVkQ3o3TUpPSQpyZjkwNllLbkFlb0JZS0YwT25lTEtVUkFNdnJva200RGx2UG'+
			'1BZ0NReTgrTlV3SUlRanE5VFpBQXRDWHZHVW9KUUhkNnVGa2lnRVRqClV0Z0RvN1Nubzd0dmRzbmxMaml3UVVIQVJjOWpreUFqaWloaWVmekowK21tTzNkUmF1R3llZTZTWlFObk1qK2FzQmxIeGpvMzd6Z2MKTnZPOHJGVmFRcm03THlMQ3pxby9YZFExRW9KbXJaaGcyVEZlMEg2NjlGRTFtWUN3cTJWWHk5bE1DQnp1OWNBdXpWNzB4dmdIWXhSQQphN0l2S1JLZ0ovbHpRNG9BQUYzSm9UU2xsd3RmL2VISkJjUzkwYmRod1FMS09zRGxnQmdTUFBGVzRkZWZIajRsaEFDd21HRmZrWXU1Cmh5MEgrdHVHV3ltNGZibHdOcy9yVDQweHh6eWVuUzAwcElrUW9mMUprZHZMNjBMbGs3bHVBY0JVWmlvREFBTDl6'+
			'bW4zbEs3a1VETWwKaTRWWFJqVVppWUI4MDFXYXZnaUlrQkZCREhFa2VQeWNlbTUwWGVRaW1OYks0TUNkOCttQTdJbHNqNEl6ODQzQ09aVTdhK1VEV0ZVKwpnSG8zOVRJQTlxWEM2ZXhnaDZCRXBmc0cvdkg1UlJVRUlxalhaL2UyTkhTN1VITlkwWFEvdmJYdzFnSUFEZ2x4T0xCZ3dZVGszY2Z6CkE4cE9zRlErdEFiQnZqUHBFZ3dBanBjQXQrRkU0L3Q3WkFGTVU1L0paRldzS1N4WDRnRlZIOHRidXBBZ1pGZnIzc1puTG9GQWRKMXYKYjB1QzNoTFBNcTFXS1BGVnZVdGg0TGVJSVVKc21EQmdRUElPaDhlWGVWdVhUQWUyZDUxZEFRQUhBMGszMzlZalV4Z3orVmNYbVU3VwpGSUJLSjJLNUZ0RE01L01mTD'+
			'NVNG9PME52VTNQNkxCQlBjZklCMER5QUtBQk5JSjNwT3dYVUsvdjdoUk14NXVRSGZnQjNDTmVneERnCko0RjRqTzBUekwyYnNOQStZQWRuT0dBZ0VCQTl2SE9nRFp6WmI2bFRLZytOZjQyT2tMdXhYczJONWRwYmlTUUt3OXVqc2xhQ0JZQUgKQUZDdnAyVklSRzlRL1gwWEdzQ0JoZ0lLVUtIQmdPbFRJSHBrV2pBODk4WWRlZGtEd0xvaUFMYkhBUTQ0Uk1Tb3VDT1pFZ0hUZUsyUQpOY0EzbGhZblRrWTlsbjJISWNVazRlaGdVMHJMd1lRQnRpWUFRb1dRK0o5c2FDaEFSUWthREZnZUpSREJ3ZUVFV3RIVlAwNEFRQ1hCCnEzTUFBNE1FQVVKejZ0NFJTWUNqbGw3UDZUcTV3bnlBNnYxbG5ndzNqSlA1Z3Ba'+
			'T0VuR283ZkRPNzg2QXdJWU83cEc1SGc1d0lYR2cKUS9VQTBHRjZnaENJZ0JWU2ZBeFdJQUtyQWVCNFdzRS9RanpsSWcyMEQ3WlJBbXN5OTFhV216NEhyQ1lHL0VySHVHMitucDlWMHc3RQpsTEs5aVVoY0JJVUQzVHU5bWt6WG9xME1nQUVOR2pUb0hnYzRQZ0N1Q0pROVpCdG1vQnhkSmVjVHpqMVc1N0M5Y05MOUpIamFWU0xTCjdYdTZHc0V0L2VXbG1RSnhWaHZaOVNkRjRVeVZKZ3Q3TENwTHdoMjd2L1dUeFFJRUR3SWJDTFM1Yncxb1lDYkZ3Q3FJM3JJTUV6b00KNkY2Q0pCQUJsNnh5aU9EckEzOHZUREQzMUtML3ZaK3VWNkM0K1lUbXhpTzdKUUZPWG4xK1NkWEFxcFhibFRoaEJaUEJpcVdYY25jYg'+
			'pTb3pTM1IzYldoY3ZlMmFNdy9ENjdRUGdUOHdQQStGbk9nRHVlUUJtc0RpalFnUmNQNFhCaGdqVHV3a0NnbGxBT0F2ZXpDTmVnT0xWCmpFV0lqWW5oYlpUQW5zNi9sclZOdjB4U1YxTFUzK2VtL2xvMlUreE1nbmFsait4NWN6U3c1SURsQ1NEMWpKNmY4RUFBUkJtUzhzSWMKTzFpUWdiQWZVQTRScUdkclVVRnMyWGJ5MExJbTkvYWUvQXZ5OWYzcEdEZzN4bk1YaTdBcnZiK1ZLME9WbjhJVklkOFVjdXRNZmlMZgowVWFrR04yUmttVEx6Vnk1OXA0RmpsWmxOYTBNQlBHb0tRK2pFNWgzbEZOaW5oTzdMSGNhSkE1V1dkSldzUnBFanQ0ODJCaURvNWFlClhWSzlOT2pLRTdyQ01sOCtSbFk4eXRtbDBuanhK'+
			'bE9NQ01KOUkzL1ZmS0VRSk8rRUVGS1ZGYm1WcHR1SGFRbk9MaWRGNjFtelYrbEMKU3oxdGQrd0I0TXdVWDg1YlpvMzNXdjFIdUthL2tQMkExcEFnUW1POEllN3htd2d4NE5UcVZzUEN1enJ5dFJWWDAyQUpuRWlsd2UyZApqZUJjUDdrMGx1ZTJQeEc0a29uS1BheGtxL0R4OEphRGM5czRscjJRaHcyMEorOFpFWlZBQ3dpQnR0b0FDZlUzVjlaOFpoUWs1YTQ5CjZSaVlWbm91a3kxeVZsWVZZUkxEQ29SanVZenhxaTBBenUzcHduaWVXZUNLZUgxdk1oNWFkVWhYemdSZUhRQXExNFZJMjlvUERnZ0UKTEt1ZEx0aG01V1RvTUdaMTFBYlprbjZzWUJqZ3dKR2g3clpBQks0eEFLUVNnSzdrY0JQQTdUUEY4Uk'+
			'p6YXRZbmF6VnU2QzlsaXlvYwpJTld3WjdmZ0M0Q3JCNjR4QUo0TmtDTkhkNlVpNEk1eEluZHBZMW1BRlFEZzFsUitNZzhiYUpTUGRFaXlaM2NxNnhGWEdZREtTWE9TCnFJejBSQ1d3VXVsRTFnaE5qRjFiSVZlcnh1Vkh2ZWJNRmwvTjJ5WTR3WUd1am1iL1Z6MElOdEEyQmtCNU9helkxVExZQnNDYXlMMlMKZFF5Lzcyc2xQVmVlU0xGU0daZUE4SkorTXFkcFlNRHVqcDRPNG1zQm53ZXVHUUNlTVJLVk93N3M3UVRueHRqU1hLR2NCbGtyMmxzNQpJYkxNVTRGbkNxM1hjL05GT0VBOGR0MUJNVnFoQ0s4UkFJRUhBREVTT2JvenJzQXBsWjVieXBkUWtRZ25hOTVrelpSWUNBTnVqZWRQClpXR0NSK24rUmxr'+
			'cG05K05RVkF2QUg0eDNRT2d1V2w3aWdMMjVmeFBzcnJwVnUwckxicEh4eHI3MWRxaThreXdYT25OSlVzREp4aloKM3QzaGtlK2J3cnBidlplV0o4eUxFSW00djJkdko3aGpuc3hlek5kYkNicENZNGJ4UWk2amdnRURpZDVVb0FTbGpabkNqUUJBL2VtVAowY1FkK3hJS1dFbDdOcGZWdG1yVlA3TlBsODZYWUFNSithNDlrYWhuZ1lSUTlIclZBQ0NoR0VDQ0ZJbnQ3NVFGT0hQRkYzT1dDVytDCi9FcHJtNWJQWkEzSGc5VS9VcFVrWlpkTHAvTGNBSlBGQTcwTkRZRUcySkEvdUJFQUFpVzBzMk43R3B4WjQva3orU0JkdW95b0RabEIKQUhDSzZ2TUxxZ29HRFBjTTl3YUdjRU9XWUtNQVNKQ29mTEMzdXduYz'+
			'BsNWVYQ3I2SnJCU3ZmbC82d3FHL0N1NFk3eVJtMU81QXpSSgozVWtxaG9LaXVyM0JlZ0NvbkUwbU5TYnZQNkNJY0xMRkUxbGJKM3pySmtweWRsNDdXK0lPRUpQZmV5QVJyK0NCT2lHb0Y0RHlsQ3F4CnYzMm9qUkp1enhYUDVaa0ZqaFdrbjZ3RGlQRDNaTm1WQkFCWVZqdVpzM1J3U2dZNzJ0dUMxSWdRRk1TdUlnQ2VEMERFd3dNOXplQ08KOFVKK1FnT3JUQnh1OG91VjlHZVgzSUxyWU91aC9oQUFkYXZCMmdHb2ZES0lsRXpkTWlLTFlGcnB4YVc4eHJmMndUY2M1cW5jaFJ5MwpnSmgwZUNTV0tBOUV2VkZodlJ6Z08wRlNLcjZ2VlNDd1p3cW5jOXdnbkdCTFg4NTg0ZldzYllCTDlPYldSTFRzak5VYkZk'+
			'WitFUTFiCkFFaUhCenBTNE13YUswd1hOemtMc0ZKalJmMlZmRWtIQTFyVHZYMmhvTGhPVTFpUENJVElsNVRyZDZSajRKcis0L3k4NXM4SHJ2YjIKTjVnVURkK0gyK2FaWXJZRUJuUW5EclFIZVFIcGFnRkFVRTZFaVpEYVcrN2JKd2pnUmZPa2Focll6RFRZYXMwNXE4MGJZSUJNYit4dApTRlRsaHJZY0FBUk9zQUFSWWtPOE1VNEFYbVQ1b0s2eGtvR3JubEFhbm1KYWRvUlhMb3hVMVRpSXp4TWlQZHliVEZRRXhYVkFVT3ZECjFDbzhBRkcrWjI5N0VnQnRqaHhxZkQycFdjdFRJUnNzajFmdkV5SFcxNWlLdVFQWEZPdHZtNTZ1eWd2VXlJVzFBUkN1QklrUWt3M1gKOXlraUFKcE0vRXAzMGZoK1pLdkZRQl'+
			'N2Uy8vYWp0NUd0M3Jka2JwdDU3TW5lVGsxc3VVY1VGa0trM3Zhamd5NUI2aThzLzBKK1NNZApwcm5WQU94czZFdExDVytLbTNCa1QwdmpmREZVSzZTMVBuK3VkZ0I4dEVWUnVuRjNjNE4zaE5Kbzc3YmU1bHFxY25VMUYzNVBjMUd5CnF5V1ZtTjlRYnFnV0FLb0VJQmEvZFVkQ0RoMlZJRzBwOFN1MGxzUTdCaWFtSEtGQ0VkYmtqZFNDV0ZVbGFFZkhMVU1iS3Nwc1FrdEcKcnUrWG8wRnFyQTVMVUNzQVFRQXFLamNNdFNkcXVIcUwydTE3dXJkVitJTTFqc242QWFnTWdxVm8vSjI3RXNxNnI5Nnl0ajIxdnpkVQpLNnpaRXRUR0FhRWxsVVBkaDNkY2F3RUFnTWJZa1VGUnJxZ1NiQkVBRmVRVHVTM1pGci9X'+
			'eExzRTlEUTNKSVBvUkt4VkM5UXFBcDRDCmpNVGV0Uy8rTmhBQUFEamMxOXRXZjdGMC9TZUhueDhqaWNwQXE3elZUNlJkWjJ1UWU1cXBVbSt0Y0wwQWtFQUUvT2hyZzNOek5xK2wKb3ZmdVU1UVErVnNxQW1WbDgzYlFnQUNBa3ZYR0pac0VDWEt4dHI3Vk1vNGhOOWdnejExWTBxODE2UURnc0djbW54cXphTDBpc0g1WAoySDhzdmdnUm9vbS9QVzdTajR6ME4xMWI4bFhyNmJGdnZuSytFT1FvaEZwTHBlczlsVUJCRWlrazBZZ2tVa2doSVN2YlV5MnhkVjYvClJjMTB4akpGa3hzb0lJOGNjc2dqaHp3S01OWjdodzA4WGQ1MHhoZkhGNjh0QUFDcTZtZTF0dlhyQUw4NndZSmxwMWY1bjJHczJoaE0KYncyQU'+
			'NjdGZDYkxlVmdzSE1HL0JvUUVkRWdUNFM5aXViWE5nb0FUTld3cGx3YXB0YU5ZUGdMKzJUQS8wTElPeUVSSGFsTVpnb1lRaQppdDVpS0ROWXk3TEpBUEFRQUg2aTFrSGtiUUNBQ2MxYkRLVjdBR3daQnpCWXdUb01kODlmV25QdG1yc1NxQVN0WWpuY2xvcUEvL2dKCkJndksyd0lBQTVyM05yWlNDYnBqN241eXdUQWd2eTBBTUwwbHY1Wm5CYlpRQ2JxTmVXdXcvYVZMMXhZQTJ5UGNndTA5SzZpbUVuMXQKSE9BRDRmNW9qV0hIRmdIQWx2MmJwcHI4azlvSUlFRkVVUDVYV2RjZWdQQjZzSnI5d2RvSklGWHZhOTBxcXVmWHVqTS9nKzEvQVJsMAp0ajVmOVo5d0FBQUFDSFJGV0hSRGIyMXRaVzUwQVBiTWxy'+
			'OEFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TVRrdE1ETXRNVEJVCk1qQTZNelU2TWpVck1ETTZNREJzNzc0NUFBQUFKWFJGV0hSa1lYUmxPbTF2WkdsbWVRQXlNREU1TFRBekxURXdWREl3T2pNMU9qSTEKS3pBek9qQXdIYklHaFFBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+Cjwvc3ZnPgo=';
		me._ht_node_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_node_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style[domTransition]='';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		me._ht_node_image.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_image.style[domTransition]='none';
			} else {
				me._ht_node_image.style[domTransition]='all 300ms ease-out 0ms';
			}
			me._ht_node_image.ggParameter.sx=1.1;me._ht_node_image.ggParameter.sy=1.1;
			me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
		}
		me._ht_node_image.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_image.style[domTransition]='none';
			} else {
				me._ht_node_image.style[domTransition]='all 300ms ease-out 0ms';
			}
			me._ht_node_image.ggParameter.sx=1;me._ht_node_image.ggParameter.sy=1;
			me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_image);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -75px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 66px;';
		hs+='visibility : inherit;';
		hs+='width : 142px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 144px;';
		hs+='height: 39px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.490196);';
		hs+='border: 1px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 9px 1px 9px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip);
		me._ht_node.appendChild(me._hotspot_preview);
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(170,0,0,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					(me._thumbnail_active.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active'] == true) && 
				(me.ggUserdata.title != "") && 
				(player.getVariableValue('opt_thumbnail_menu_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					me._thumbnail_title.style.visibility="hidden";
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
	me.addSkin();
	me._thumbnail_menu.logicBlock_alpha();
	me._thumbnail_menu.logicBlock_position();
	player.addListener('changenode', function(args) { me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._thumbnail_menu.logicBlock_position(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};