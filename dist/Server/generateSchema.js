"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const ts = __importStar(require("typescript"));
const tsJsonSchemaGenerator = __importStar(require("ts-json-schema-generator"));
const fs = __importStar(require("fs"));
const program = ts.createProgram({
    rootNames: ['src/AllMetrics.ts', 'src/BusFactor.ts', 'src/Correctness.ts', 'src/License.ts', 'src/Metric.ts', 'src/Package.ts', 'src/RampUp.ts', 'src/ResponsiveMaintainer.ts'],
    options: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2015
    }
});
const schemaGenerator = tsJsonSchemaGenerator.createGenerator({
    path: 'src/AllMetrics.ts',
    tsconfig: '../tsconfig.json',
    type: 'AllMetrics'
});
const schema = schemaGenerator.createSchema('AllMetrics');
fs.writeFileSync('schema.json', JSON.stringify(schema, null, 2));
console.log('Schema generated at schema.json');