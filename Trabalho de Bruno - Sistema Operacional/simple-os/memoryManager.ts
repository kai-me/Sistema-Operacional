// memoryManager.ts

type MemoryBlock = {
  start: number;
  size: number;
  processName: string | null;
};

export class MemoryManager {
  private totalMemory: number;
  private usedMemory: number;
  private memoryBlocks: MemoryBlock[];

  constructor() {
    this.totalMemory = 128; // 128KB (cada endereço corresponde a 1KB)
    this.usedMemory = 0;
    this.memoryBlocks = [
      { start: 0, size: this.totalMemory, processName: null },
    ]; // Inicializar com um único bloco representando toda a memória
  }

  init(): void {
    console.log("Gerenciador de memória inicializado.");
  }

  allocateMemory(processName: string, size: number): void {
    console.log(
      `Alocando memória para o processo ${processName} - Tamanho: ${size} bytes`
      // Implementação do algoritmo de alocação de memória
    );

    //Encontre o primeiro bloco que se ajusta ao processo
    const blockIndex = this.memoryBlocks.findIndex(
      (block) => block.size >= size
    );

    if (blockIndex !== -1) {
      const selectedBlock = this.memoryBlocks[blockIndex];

      // Verifica se o bloco selecionado precisa ser dividido
      if (selectedBlock.size > size) {
        const remainingBlock: MemoryBlock = {
          start: selectedBlock.start + size,
          size: selectedBlock.size - size,
          processName: null,
        };
        this.memoryBlocks.splice(blockIndex + 1, 0, remainingBlock);
      }

      //Atualiza a memória usada
      this.usedMemory += size;

      console.log(
        `Memória alocada para o processo ${processName} - Início: ${selectedBlock.start}, Tamanho: ${size} bytes`
      );
      selectedBlock.processName = processName;
    } else {
      console.log(
        `Falha na alocação de memória para o processo ${processName} - Não há memória disponível suficiente`
      );
    }
  }

  allocateMemoryBestFit(processName: string, size: number): void {
    console.log(
      `Alocando memória para o processo ${processName} - Tamanho: ${size} bytes`
    );

    //Encontra o bloco com o menor tamanho que se adapta ao processo
    let bestFitIndex = -1;
    let bestFitSize = Infinity;

    this.memoryBlocks.forEach((block, index) => {
      if (block.size >= size && block.size < bestFitSize) {
        bestFitIndex = index;
        bestFitSize = block.size;
      }
    });

    if (bestFitIndex !== -1) {
      const selectedBlock = this.memoryBlocks[bestFitIndex];

      // Verifica se o bloco selecionado precisa ser dividido
      if (selectedBlock.size > size) {
        const remainingBlock: MemoryBlock = {
          start: selectedBlock.start + size,
          size: selectedBlock.size - size,
          processName: null,
        };
        this.memoryBlocks.splice(bestFitIndex + 1, 0, remainingBlock);
      }

      //Atualiza a memória usada
      this.usedMemory += size;

      console.log(
        `Memória alocada para o processo ${processName} - Início: ${selectedBlock.start}, Tamanho: ${size} bytes`
      );
      selectedBlock.processName = processName;
    } else {
      console.log(
        `Falha na alocação de memória para o processo ${processName} - Não há memória disponível suficiente`
      );
    }
  }

  allocateMemoryWorstFit(processName: string, size: number): void {
    console.log(
      `Alocando memória para o processo ${processName} - Tamanho: ${size} bytes`
    );

    //Encontra o bloco com o maior tamanho que se ajusta ao processo
    let worstFitIndex = -1;
    let worstFitSize = -Infinity;

    this.memoryBlocks.forEach((block, index) => {
      if (block.size >= size && block.size > worstFitSize) {
        worstFitIndex = index;
        worstFitSize = block.size;
      }
    });

    if (worstFitIndex !== -1) {
      const selectedBlock = this.memoryBlocks[worstFitIndex];

      // Verifica se o bloco selecionado precisa ser dividido
      if (selectedBlock.size > size) {
        const remainingBlock: MemoryBlock = {
          start: selectedBlock.start + size,
          size: selectedBlock.size - size,
          processName: null,
        };
        this.memoryBlocks.splice(worstFitIndex + 1, 0, remainingBlock);
      }

      //Atualiza a memória usada
      this.usedMemory += size;

      console.log(
        `Memória alocada para o processo ${processName} - Início: ${selectedBlock.start}, Tamanho: ${size} bytes`
      );
      selectedBlock.processName = processName;
    } else {
      console.log(
        `Falha na alocação de memória para o processo ${processName} - Não há memória disponível suficiente`
      );
    }
  }

  listMemoryBlocks(): void {
    console.log("----------------------------------");
    console.log("Blocos de Memória:");

    const memoryMap: (string | null)[] = Array(this.totalMemory).fill(null);

    this.memoryBlocks.forEach((block) => {
      for (let i = block.start; i < block.start + block.size; i++) {
        memoryMap[i] = block.processName;
      }
    });

    console.log(memoryMap);
    console.log("----------------------------------");
  }
}
