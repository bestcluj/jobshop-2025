import { spawn } from "child_process";

const compileCSSCommand = `sass --no-source-map --style=expanded public\\styles\\sass\\${process.env.npm_config_src}.sass public\\styles\\${process.env.npm_config_src}.css`;
const changeTabSizeCommand = `prettier --write --tab-width=4 public\\styles\\${process.env.npm_config_src}.css`;

const compileCSS = spawn('powershell', ['-Command', compileCSSCommand]);
const changeTabSize = spawn('powershell', ['-Command', changeTabSizeCommand]);

compileCSS.stdout.on('data', (data) => { console.log(`PowerShell Output:\n${data}`); });
changeTabSize.stdout.on('data', (data) => { console.log(`PowerShell Output:\n${data}`); });

compileCSS.stderr.on('data', (data) => { console.error(`PowerShell Error:\n${data}`); });
changeTabSize.stderr.on('data', (data) => { console.error(`PowerShell Error:\n${data}`); });

changeTabSize.on('close', (code) => {
    
    console.log(`PowerShell process exited with code ${code}`);
    process.exit(code); // Exit the Node.js script
});