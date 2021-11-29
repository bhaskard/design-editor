import { styled } from 'baseui'
import { Button, SHAPE, KIND, SIZE } from 'baseui/button'

import { useEditor } from '@scenify/sdk'
import Icons from '../../Icons'
import { useEffect, useState } from 'react'

const Container = styled('div', props => ({
  display: 'flex',
  alignItems: 'center',
}))

function History() {
  const editor = useEditor()

  const [historyStatus, setHistoryStatus] = useState({ hasUndo: false, hasRedo: false })
  useEffect(() => {
    const handleHistoryChange = (data: any) => {
      setHistoryStatus({ ...historyStatus, hasUndo: data.hasUndo, hasRedo: data.hasRedo })
    }
    if (editor) {
      editor.on('history:changed', handleHistoryChange)
    }
    return () => {
      if (editor) {
        editor.off('history:changed', handleHistoryChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor])

  return (
    <Container>
      <Button
        $style={{
          opacity: historyStatus.hasUndo ? 1 : 0.55,
          pointerEvents: historyStatus.hasUndo ? 'auto' : 'none',
        }}
        onClick={() => {
          editor.undo()
        }}
        size={SIZE.compact}
        kind={KIND.tertiary}
        shape={SHAPE.square}
      >
        <Icons.Undo size={24} />
      </Button>
      <Button
        $style={{
          opacity: historyStatus.hasRedo ? 1 : 0.55,
          pointerEvents: historyStatus.hasRedo ? 'auto' : 'none',
        }}
        onClick={() => {
          editor.redo()
        }}
        size={SIZE.compact}
        kind={KIND.tertiary}
        shape={SHAPE.square}
      >
        <Icons.Redo size={24} />
      </Button>
    </Container>
  )
}
export default History
