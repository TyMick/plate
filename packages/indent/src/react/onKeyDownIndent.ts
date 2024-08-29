import type { KeyboardHandler } from '@udecode/plate-common/react';

import { Hotkeys } from '@udecode/plate-common/react';

import type { IndentConfig } from '../lib/IndentPlugin';

import { indent, outdent } from '../lib/transforms/index';

export const onKeyDownIndent: KeyboardHandler<IndentConfig> = ({
  editor,
  event,
}) => {
  if (event.defaultPrevented) return;
  if (Hotkeys.isTab(editor, event)) {
    event.preventDefault();
    indent(editor);
  }
  if (Hotkeys.isUntab(editor, event)) {
    event.preventDefault();
    outdent(editor);
  }
};