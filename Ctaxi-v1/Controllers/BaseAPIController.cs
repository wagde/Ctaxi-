using Ctaxi_v1.DBContext;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Ctaxi_v1.Controllers
{
    public class BaseAPIController : ApiController
    {
       protected CtaxiDb CtaxiDb = new CtaxiDb();
        protected dynamic ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
        protected int count = 0;

    }
}
