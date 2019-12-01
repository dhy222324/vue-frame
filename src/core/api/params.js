
import qs from "qs";
var query=qs.parse(location.search.slice(1));//? nanem=Msea&sex=1

var params={
    userType:query.userType||"",
    token:query.token||"",
    v:new Date().getTime()
}

export default params;