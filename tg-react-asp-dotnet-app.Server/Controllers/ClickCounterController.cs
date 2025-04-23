using Microsoft.AspNetCore.Mvc;

namespace tg_react_asp_dotnet_app.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ClickCounterController : ControllerBase
{
    private static int _counter = 0;

    [HttpGet]
    public int GetCounter()
    {
        return _counter;
    }

    [HttpPost]
    public int IncrementCounter()
    {
        _counter++;
        return _counter;
    }
}
