import { Task } from './task';

export abstract class CssTask extends Task {

  precondition(files: String[]) {
    return files.reduce((a, f) => {
      return a || f.endsWith('.css') || f.endsWith('.sass') || f.endsWith('.scss');
    }, false);
  }

}
