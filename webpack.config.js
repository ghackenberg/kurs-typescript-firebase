module.exports = {

    // Eintrittspunkt, von der aus die Importe gebündelt werden
    entry: './src/main.tsx',

    // Konfiguration des Loaders für TypeScript-Dateien
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },

    // Konfiguration der Dateiendungen für Importe
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
    
}