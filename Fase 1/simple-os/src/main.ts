import { Strategy } from "./memory/Strategy";
import { Process } from "./process/Process";
import { SystemCallType } from "./so/SystemCallType";
import { SystemOperation } from "./so/SystemOperation";

const systemOperation = new SystemOperation(Strategy.WORST_FIT);
const p1 = new Process(50);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p1);

const p2 = new Process(20);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p2);

const p3 = new Process(30);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p3);

const p4 = new Process(27);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p4);

const p5 = new Process(1);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p5);

systemOperation.systemCall(SystemCallType.CLOSE_PROCESS, p2);

systemOperation.systemCall(SystemCallType.CLOSE_PROCESS, p4);

const p6 = new Process(1);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p6);

const p7 = new Process(1);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p7);

const p8 = new Process(22);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p8);

const p9 = new Process(17);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p9);

const p10 = new Process(1);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p10);

const p11 = new Process(1);
systemOperation.systemCall(SystemCallType.WRITE_PROCESS, p11);
