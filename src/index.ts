import commander from 'commander';

const program = new commander.Command();


const main = () => {
  program
    .version('0.0.1')
    .parse(process.argv);


  program.help()
}

main();
