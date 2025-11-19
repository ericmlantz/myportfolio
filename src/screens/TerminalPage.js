//imported from 3rd party libraries//imported from this repo
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput
} from 'react-terminal-ui'

//imported from this repo

//create the component
const TerminalPage = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>
  ])

  const navigate = useNavigate()

  const commands = [
    {
      // college-info: requires "college" or "university" or "school" BUT not "year"
      match: (lower) =>
      ((lower.includes('college') || lower.includes('university')) || lower.includes('school')) &&
        (!lower.includes('year') && !lower.includes('graduate')),
      action: (ld) => {
        ld.push(
          <TerminalOutput>
            PACE University for Grad School and Kennesaw State University for
            Undergrad
          </TerminalOutput>
        )
      }
    },

    {
      // college-year-detailed: requires "year" or "graduate" AND (college OR university OR school)
      match: (lower) =>
        (lower.includes('year') || lower.includes('graduate')) &&
        (lower.includes('college') || lower.includes('university') || lower.includes('school') || lower.includes('graduate')),
      action: (ld) => {
        ld.push(
          <TerminalOutput>
            Completed Grad School in August 2025 and completed Undergraduate in
            2018
          </TerminalOutput>
        )
      }
    },

    {
      // college-year-detailed: requires "year" AND (college OR university)
      match: (lower) =>
        lower.includes('year') &&
        (lower.includes('college') || lower.includes('university')),
      action: (ld) => {
        ld.push(
          <TerminalOutput>
            Completed Grad School in August 2025 and completed Undergraduate in
            2018
          </TerminalOutput>
        )
      }
    },

    {
      // view-projects exact command
      match: (lower) => lower === 'projects',
      action: () => navigate('/projects')
    },

    {
      // clear command
      match: (lower) => lower === 'clear',
      action: (ld) => {
        ld.length = 0
      }
    }
  ]

  function onInput(input) {
    let ld = [...terminalLineData]
    ld.push(<TerminalInput>{input}</TerminalInput>)

    let matched = false

    const lower = input.toLowerCase()

    for (const cmd of commands) {
      if (cmd.match(lower)) {
        cmd.action(ld, input)
        matched = true
        break
      }
    }

    if (!matched) {
      ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>)
    }
    setTerminalLineData(ld)
    console.log(`New terminal input received: '${input}'`)
  }

  //render
  return (
    <div className="terminal_container">
      <Terminal
        name="Eric's Terminal"
        colorMode={ColorMode.Dark}
        onInput={onInput}
      >
        {terminalLineData}
      </Terminal>
    </div>
  )
}

//make this component available to the app
export default TerminalPage
