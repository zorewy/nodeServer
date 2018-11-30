static Level WARN

WARN level表明会出现潜在错误的情形。

static Level ERROR

ERROR level指出虽然发生错误事件，但仍然不影响系统的继续运行。

static Level FATAL

FATAL level指出每个严重的错误事件将会导致应用程序的退出。

另外，还有两个可用的特别的日志记录级别: (以下描述来自log4j APIhttp://jakarta.apache.org/log4j/docs/api/index.html):

static Level ALL

ALL Level是最低等级的，用于打开所有日志记录。

static Level OFF

OFF Level是最高等级的，用于关闭所有日志记录。

日志记录器（Logger）的行为是分等级的。如下表所示：

分为OFF、FATAL、ERROR、WARN、INFO、DEBUG、ALL或者您定义的级别。Log4j建议只使用四个级别，优先级从高到低分别是 ERROR、WARN、INFO、DEBUG。通过在这里定义的级别，您可以控制到应用程序中相应级别的日志信息的开关。比如在这里定义了INFO级别，则应用程序中所有DEBUG级别的日志信息将不被打印出来，也是说大于等于的级别的日志才输出。

http: {
    type: "dateFile", // 可以设置成 console、file、dateFile三种
    filename: `${logPath}/url/`, // // 设置log输出的文件路劲和文件名
    pattern: ".yyyy-MM-dd.txt",
    maxLogSize: '10000000', // 设置文件大小
    encoding: "utf-8", // 设置文件编码格式
    alwaysIncludePattern: true // // 和上面同时使用 设置每天生成log名
},