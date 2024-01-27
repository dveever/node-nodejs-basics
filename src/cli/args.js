const parseArgs = () => {
    const args = process.argv.slice(2).reduce((acc, prev) => {
        if (prev.substring(0, 2) === '--') {
            acc += prev.substring(2) + ' is ';
        } else {
            acc += prev + ', ';
        }
        return acc;
    }, '')
    console.log(args.substring(0, args.length-2));
};

parseArgs();