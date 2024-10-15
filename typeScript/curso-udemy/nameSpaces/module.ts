/* Resumidamente, os módulos em javaScript ou typeScript é uma forma de compartilhar informações entre arquivos, desta forma, todos os aplicativos que realizarem importação desse módulo poderão usufruir e utilizar suas informações ou funções que foram expostas

import = importa informações de classes, namespaces, const, let, etc
export = Exporta para outras pessoas consumirem informações
*/

import { Pessoa1 } from "./pessoa-1";
import { Pessoa } from "./namespaces-aninhados";

export { Pessoa1, Pessoa };
