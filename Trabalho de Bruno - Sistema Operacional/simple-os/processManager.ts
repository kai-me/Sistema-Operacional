// processManager.ts

export class ProcessManager {
  private processes: { name: string; memoryUsage: number }[];

  constructor() {
    this.processes = [];
  }

  init(): void {
    console.log("Gerenciador de processos inicializado.");
  }

  createProcess(name: string, memoryUsage: number): void {
    console.log(
      `Criando processo: ${name} - Uso de Memória: ${memoryUsage} bytes`
    );
    this.processes.push({ name, memoryUsage });
  }

  listProcesses(): void {
    console.log("Processos em execução:");
    this.processes.forEach((process) => {
      console.log(
        `Processo: ${process.name} - Uso de Memória: ${process.memoryUsage} bytes`
      );
    });
  }
}
