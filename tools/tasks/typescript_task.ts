import { Task } from './task';

export abstract class TypeScriptTask extends Task {
  precondition(files: String[]) {
    return files.reduce((a, f) => {
      return a || f.endsWith('.ts');
    }, false);
  }
}
