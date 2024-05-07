using PreactDotNetMvcTesting.Models;
using Vite.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddViteServices();
}

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() == false)
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
else
{
    app.UseWebSockets();
    app.UseViteDevelopmentServer(true);
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Create api endpoint
app.MapGet("/api/MyApi", (int count = 5) => Enumerable.Range(1, count).Select(index => new TestDataModel
{
    Date = DateTime.Now,
    TemperatureC = index,
    Summary = "Summary " + index
}));

app.Run();