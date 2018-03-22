using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Ctaxi_v1.DBContext;
using System.Web.Security;

namespace Ctaxi_v1.Controllers
{
    public class UserController : BaseAPIController
    {
        public HttpResponseMessage Post([FromBody] usersTable value)
        {
            var result = CtaxiDb.usersTable.FirstOrDefault(u => u.username == value.username && u.password == value.password);
            if (result != null)
            {
                FormsAuthentication.SetAuthCookie(value.username, false);
                return ToJson(true);
            }
            else
            {
               
                return ToJson(false);
            }

        }
    }
}
