"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const roles_guard_1 = require("./guards/roles.guard");
const core_2 = require("@nestjs/core");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((req, res, next) => {
        req.user = { role: 'Admin' };
        next();
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    app.useGlobalGuards(new roles_guard_1.RolesGuard(new core_2.Reflector()));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map