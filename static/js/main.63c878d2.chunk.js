(this.webpackJsonpreactinterface=this.webpackJsonpreactinterface||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),s=a.n(o),m=(a(20),a(8),a(21),a(23),a(24),a(2)),c=a(3),l=a(1),i=a(4),p=a(5),d=(a(25),a(12)),h=a(6),u=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={petName:"",ownerName:"",aptDate:"",aptTime:"",aptNotes:""},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e.handleAdd=e.handleAdd.bind(Object(l.a)(e)),e}return Object(c.a)(a,[{key:"handleAdd",value:function(e){e.preventDefault();var t={petName:this.state.petName,ownerName:this.state.ownerName,aptDate:this.state.aptDate+" "+this.state.aptTime,aptNotes:this.state.aptNotes};this.props.AddAppointment(t),this.setState({petName:"",ownerName:"",aptDate:"",aptTime:"",aptNotes:""}),this.props.toggleForm()}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card textcenter mt-3 "+(this.props.formDisplay?"":"add-appointment")},r.a.createElement("div",{className:"apt-addheading card-header bg-primary text-white",onClick:this.props.toggleForm},r.a.createElement(h.a,null)," Add Appointment"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"aptForm",noValidate:!0,onSubmit:this.handleAdd},r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"petName",readOnly:!0},"Pet Name"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"petName",placeholder:"Pet's Name",value:this.state.petName,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"ownerName"},"Pet Owner"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"ownerName",placeholder:"Owner's Name",value:this.state.ownerName,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptDate"},"Date"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"date",className:"form-control",name:"aptDate",id:"aptDate",value:this.state.aptDate,onChange:this.handleChange})),r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptTime"},"Time"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"time",className:"form-control",name:"aptTime",id:"aptTime",value:this.state.aptTime,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 text-md-right",htmlFor:"aptNotes"},"Apt. Notes"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("textarea",{className:"form-control",rows:"4",cols:"50",name:"aptNotes",id:"aptNotes",placeholder:"Appointment Notes",value:this.state.aptNotes,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row mb-0"},r.a.createElement("div",{className:"offset-md-2 col-md-10"},r.a.createElement("button",{type:"submit",className:"btn btn-primary d-block ml-auto"},"Add Appointment"))))))}}]),a}(n.Component),N=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-appointments row justify-content-center my-4"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{id:"SearchApts",type:"text",className:"form-control","aria-label":"Search Appointments",onChange:function(t){return e.props.searchApts(t.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by: ",r.a.createElement("span",{className:"caret"})),r.a.createElement("div",{className:"sort-menu dropdown-menu dropdown-menu-right"},r.a.createElement("button",{className:" sort-by dropdown-item "+("petName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("petName",e.props.orderDir)},href:"#"},"Pet Name"),r.a.createElement("button",{className:" sort-by dropdown-item "+("aptDate"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("aptDate",e.props.orderDir)},href:"#"},"Date"),r.a.createElement("button",{className:" sort-by dropdown-item "+("ownerName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("ownerName",e.props.orderDir)},href:"#"},"Owner"),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{className:" sort-by dropdown-item "+("asc"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"asc")},href:"#"},"Asc"),r.a.createElement("button",{className:" sort-by dropdown-item "+("dec"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"desc")},href:"#"},"Desc"))))))}}]),a}(n.Component),f=a(13),b=a.n(f),v=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"appointment-list item-list mb-3"},this.props.appointments.map((function(t){return r.a.createElement("div",{className:"pet-item col media py-3",key:t.aptId},r.a.createElement("div",{className:"mr-3"},r.a.createElement("button",{className:"pet-delete btn btn-sm btn-danger",onClick:function(){return e.props.deleteAppointment(t)}},r.a.createElement(h.b,null))),r.a.createElement("div",{className:"pet-info media-body"},r.a.createElement("div",{className:"pet-head d-flex"},r.a.createElement("span",{className:"pet-name"},t.petName),r.a.createElement("span",{className:"apt-date ml-auto"},r.a.createElement(b.a,{date:t.aptDate,parse:"YYYY-MM-dd hh-mm",format:"MMM-D h:ma"}))),r.a.createElement("div",{className:"owner-name"},r.a.createElement("span",{className:"label-item"},"Owner: "),r.a.createElement("span",null,t.ownerName)),r.a.createElement("div",{className:"apt-notes"},t.aptNotes)))})))}}]),a}(n.Component),g=a(14),y=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={myAppointments:[],orderBy:"petName",orderDir:"asc",queryText:"",formDisplay:!1,lastIndex:0},e.deleteAppointment=e.deleteAppointment.bind(Object(l.a)(e)),e.toggleForm=e.toggleForm.bind(Object(l.a)(e)),e.addAppointment=e.addAppointment.bind(Object(l.a)(e)),e.changeOrder=e.changeOrder.bind(Object(l.a)(e)),e.searchApts=e.searchApts.bind(Object(l.a)(e)),e}return Object(c.a)(a,[{key:"searchApts",value:function(e){this.setState({query:e})}},{key:"changeOrder",value:function(e,t){this.setState({orderBy:e,orderDir:t})}},{key:"addAppointment",value:function(e){var t=this.state.myAppointments;e.aptId=this.state.lastIndex,t.unshift(e),this.setState({myAppointments:t,lastIndex:this.state.lastIndex+1})}},{key:"toggleForm",value:function(){this.setState({formDisplay:!this.state.formDisplay})}},{key:"deleteAppointment",value:function(e){var t=this.state.myAppointments;t=Object(g.without)(t,e),this.setState({myAppointments:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("./data.json").then((function(e){return e.json()})).then((function(t){var a=t.map((function(t){return t.aptId=e.state.lastIndex,e.setState({lastIndex:e.state.lastIndex+1}),t}));e.setState({myAppointments:a})}))}},{key:"render",value:function(){var e,t=this,a=this.state.myAppointments;return e="asc"===this.state.orderDir?1:-1,a=a.sort((function(a,n){return a[t.state.orderBy].toLowerCase()<n[t.state.orderBy].toLowerCase()?-1*e:1*e})).filter((function(e){return e.petName.toLowerCase().includes(t.state.queryText.toLowerCase())||e.ownerName.toLowerCase().includes(t.state.queryText.toLowerCase())||e.aptNotes.toLowerCase().includes(t.state.queryText.toLowerCase())})),r.a.createElement("main",{className:"page bg-white",id:"petratings"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement(u,{formDisplay:this.state.formDisplay,toggleForm:this.toggleForm,addAppointment:this.addAppointment}),r.a.createElement(N,{orderBy:this.state.orderBy,orderDir:this.state.orderDir,changeOrder:this.changeOrder,searchApts:this.searchApts}),r.a.createElement(v,{appointments:a,deleteAppointment:this.deleteAppointment}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.63c878d2.chunk.js.map