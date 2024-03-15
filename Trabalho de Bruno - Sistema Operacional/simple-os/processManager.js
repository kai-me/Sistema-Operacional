"use strict";
// processManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessManager = void 0;
class ProcessManager {
    constructor() {
        this.processes = [];
    }
    init() {
        console.log("Gerenciador de processos inicializado.");
    }
    createProcess(name, memoryUsage) {
        console.log(`Criando processo: ${name} - Uso de Memória: ${memoryUsage} bytes`);
        this.processes.push({ name, memoryUsage });
    }
    listProcesses() {
        console.log("Processos em execução:");
        this.processes.forEach((process) => {
            console.log(`Processo: ${process.name} - Uso de Memória: ${process.memoryUsage} bytes`);
        });
    }
}
exports.ProcessManager = ProcessManager;
