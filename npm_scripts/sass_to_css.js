import { spawn } from "child_process";

const compileCSSCommand = `sass --watch --no-source-map --style=expanded src\\styles\\sass\\${process.env.npm_config_src}.sass src\\styles\\${process.env.npm_config_src}.css`;

const compileCSS = spawn('powershell', ['-Command', compileCSSCommand]);

compileCSS.stdout.on('data', (data) => { console.log(`PowerShell Output:\n${data}`); });

compileCSS.stderr.on('data', (data) => { console.error(`PowerShell Error:\n${data}`); });

compileCSS.on('close', (code) => {

    console.log(`PowerShell process exited with code ${code}`);
    process.exit(code); // Exit the Node.js script
});