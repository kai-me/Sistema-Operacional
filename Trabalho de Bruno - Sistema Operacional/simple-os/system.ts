// system.ts

import { ProcessManager } from "./processManager";
import { MemoryManager } from "./memoryManager";

class OperatingSystem {
  private processManager: ProcessManager;
  private memoryManager: MemoryManager;

  constructor() {
    this.processManager = new ProcessManager();
    this.memoryManager = new MemoryManager();
  }

  boot(algorithm: string): void {
    console.log("Inicializando Sistema Operacional...");
    console.log("Iniciando gerenciador de processos...");
    this.processManager.init();
    console.log("Gerenciador de processos pronto.");

    console.log("Inicializando gerenciador de memória...");
    this.memoryManager.init();
    console.log("Gerenciador de memória pronto.");

    console.log("Sistema Operacional inicializado com sucesso.");

    // Executar processos com base no algoritmo escolhido
    if (algorithm.toLowerCase() === "worstfit") {
      this.runProcessesWorstFit();
    } else if (algorithm.toLowerCase() === "firstfit") {
      this.runProcessesFirstFit();
    } else if (algorithm.toLowerCase() === "bestfit") {
      this.runProcessesBestFit();
    } else {
      console.log("Escolha de algoritmo inválida.");
    }
  }

  private runProcessesWorstFit(): void {
    console.log("Executando processos com Worst Fit..."); // Indicando que este exemplo usa o Worst Fit

    this.processManager.createProcess("Processo A", 50); // Processo menor
    this.memoryManager.allocateMemoryWorstFit("Processo A", 50); // Usando Worst Fit

    this.processManager.createProcess("Processo B", 100); // Processo maior
    this.memoryManager.allocateMemoryWorstFit("Processo B", 100); // Usando Worst Fit

    this.processManager.createProcess("Processo C", 75); // Processo intermediário
    this.memoryManager.allocateMemoryWorstFit("Processo C", 75); // Usando Worst Fit

    console.log("Processos em execução com Worst Fit:");
    this.processManager.listProcesses();

    console.log("Blocos de memória com Worst Fit:");
    this.memoryManager.listMemoryBlocks();
  }

  private runProcessesFirstFit(): void {
    console.log("Executando processos com First Fit..."); // Indicando que este exemplo usa o First Fit

    this.processManager.createProcess("Processo A", 100); // Processo maior
    this.memoryManager.allocateMemory("Processo A", 100); // Usando First Fit

    this.processManager.createProcess("Processo B", 50); // Processo menor
    this.memoryManager.allocateMemory("Processo B", 50); // Usando First Fit

    this.processManager.createProcess("Processo C", 75); // Processo intermediário
    this.memoryManager.allocateMemory("Processo C", 75); // Usando First Fit

    console.log("Processos em execução com First Fit:");
    this.processManager.listProcesses();

    console.log("Blocos de memória com First Fit:");
    this.memoryManager.listMemoryBlocks();
  }

  private runProcessesBestFit(): void {
    console.log("Executando processos com Best Fit..."); // Indicando que este exemplo usa o Best Fit

    this.processManager.createProcess("Processo A", 75); // Processo intermediário
    this.memoryManager.allocateMemoryBestFit("Processo A", 75); // Usando Best Fit

    this.processManager.createProcess("Processo B", 100); // Processo maior
    this.memoryManager.allocateMemoryBestFit("Processo B", 100); // Usando Best Fit

    this.processManager.createProcess("Processo C", 50); // Processo menor
    this.memoryManager.allocateMemoryBestFit("Processo C", 50); // Usando Best Fit

    console.log("Processos em execução com Best Fit:");
    this.processManager.listProcesses();

    console.log("Blocos de memória com Best Fit:");
    this.memoryManager.listMemoryBlocks();
  }
}

const os = new OperatingSystem();
const escolhaAlgoritmo = process.argv[2]; // Obtendo a escolha do algoritmo a partir do argumento da linha de comando

if (escolhaAlgoritmo) {
  os.boot(escolhaAlgoritmo); // Iniciar o sistema operacional com base na escolha do algoritmo
} else {
  console.log(
    "Por favor, forneça uma escolha de algoritmo (WorstFit, FirstFit ou BestFit)."
  );
}
