import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import { HttpAdapter, RequestHandler } from '@hemtypes/http-adapter';

export default class ExpressAdapter implements HttpAdapter {
  protected httpServer: any;

  constructor(protected instance: any = express()) {}

  public use(...args: any[]) {
    return this.instance.use(...args);
  }

  public get(handler: RequestHandler | RequestHandler[]): any;
  public get(path: any, handler: RequestHandler | RequestHandler[]): any;
  public get(...args: any[]) {
    return this.instance.get(...args);
  }

  public post(handler: RequestHandler | RequestHandler[]): any;
  public post(path: any, handler: RequestHandler | RequestHandler[]): any;
  public post(...args: any[]) {
    return this.instance.post(...args);
  }

  public head(handler: RequestHandler | RequestHandler[]): any;
  public head(path: any, handler: RequestHandler | RequestHandler[]): any;
  public head(...args: any[]) {
    return this.instance.head(...args);
  }

  public delete(handler: RequestHandler | RequestHandler[]): any;
  public delete(path: any, handler: RequestHandler | RequestHandler[]): any;
  public delete(...args: any[]) {
    return this.instance.delete(...args);
  }

  public put(handler: RequestHandler | RequestHandler[]): any;
  public put(path: any, handler: RequestHandler | RequestHandler[]): any;
  public put(...args: any[]) {
    return this.instance.put(...args);
  }

  public patch(handler: RequestHandler | RequestHandler[]): any;
  public patch(path: any, handler: RequestHandler | RequestHandler[]): any;
  public patch(...args: any[]) {
    return this.instance.patch(...args);
  }

  public all(handler: RequestHandler | RequestHandler[]): any;
  public all(path: any, handler: RequestHandler | RequestHandler[]): any;
  public all(...args: any[]) {
    return this.instance.all(...args);
  }

  public options(handler: RequestHandler | RequestHandler[]): any;
  public options(path: any, handler: RequestHandler | RequestHandler[]): any;
  public options(...args: any[]) {
    return this.instance.options(...args);
  }

  public listen(port: string | number, callback?: () => void): any;
  public listen(port: number, hostname: string, callback?: () => void): any;
  public listen(port: any, ...args: any[]) {
    return this.httpServer.listen(port, ...args);
  }

  public status(response: any, statusCode: number) {
    return response.status(statusCode);
  }

  public end(response: any, message?: string) {
    return response.end(message);
  }

  public render(response: any, view: string, options: any) {
    return response.render(view, options);
  }

  public redirect(response: any, statusCode: number, url: string) {
    return response.redirect(statusCode, url);
  }

  public isHeadersSent(response: any): boolean {
    return response.headersSent;
  }

  public setHeader(response: any, name: string, value: string) {
    return response.set(name, value);
  }

  public getInstance<T = any>(): T {
    return this.instance as T;
  }

  public setInstance<T = any>(instance: T) {
    this.instance = instance;
  }

  public getHttpServer(): any {
    return this.httpServer as any;
  }

  public setHttpServer(httpServer: any) {
    this.httpServer = httpServer;
  }

  public initHttpServer(options: any) {
    const isHttpsEnabled = options && options.httpsOptions;
    if (isHttpsEnabled) {
      this.httpServer = https.createServer(
        options.httpsOptions,
        this.getInstance(),
      );
      return;
    }
    this.httpServer = http.createServer(this.getInstance());
  }

  public getType(): string {
    return 'express';
  }

  public close() {
    if (!this.httpServer) {
      return undefined;
    }
    return new Promise((resolve) => this.httpServer.close(resolve));
  }

  public set(...args: any[]) {
    return this.instance.set(...args);
  }

  public setLocal(key: string, value: any) {
    this.instance.locals[key] = value;
  }

  public enable(...args: any[]) {
    return this.instance.enable(...args);
  }

  public disable(...args: any[]) {
    return this.instance.disable(...args);
  }

  public engine(...args: any[]) {
    return this.instance.engine(...args);
  }

  public useStaticAssets(path: string, options: any) {
    if (options && options.prefix) {
      return this.use(options.prefix, express.static(path, options));
    }
    return this.use(express.static(path, options));
  }

  public setBaseViewsDir(path: string | string[]) {
    return this.set('views', path);
  }

  public setViewEngine(engine: string) {
    return this.set('view engine', engine);
  }

  public getRequestHostname(request: any): string {
    return request.hostname;
  }

  public getRequestMethod(request: any): string {
    return request.method;
  }

  public getRequestUrl(request: any): string {
    return request.originalUrl;
  }
}
