export abstract class HttpAdapter {
    // T significa que la estructura de datos que recibe la puedo definir donde se utiliza el metodo
    // Record es un tipo de dato { key: value }
    abstract get<T>(url: string, options?: Record<string, unknown>) : Promise<T>;

}
