/**
 * Errors of the package script
 */
export class ScriptError extends Error {
    constructor(m: string) {
        super(m);
    }
}


/**
 * Errors of the Org metadata
 */
export class MetadataError extends Error {
    constructor(m: string) {
        super(m);
    }
}


/**
 * Errors of the file system
 */
export class FileSystemError extends Error {
    constructor(m: string) {
        super(m);
    }
}

/**
 * Errors of plugin initialization
 */
export class PluginInitError extends Error {
    constructor(m: string) {
        super(m);
    }
}

/**
 * Errors during job execution
 */
export class JobError extends Error {
    constructor(m: string) {
        super(m);
    }
}


/**
 * User has aborted the job
 */
export class JobAbortedByUser extends Error {
    constructor(m: string) {
        super(m);
    }
}