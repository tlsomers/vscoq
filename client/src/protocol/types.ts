import { integer, TextDocumentIdentifier, VersionedTextDocumentIdentifier } from "vscode-languageclient";
import { Position, Range, Uri } from "vscode";

type Nullable<T> = T | null;

export type PpTag = string;

export type BlockType =
  | ["Pp_hbox"]
  | ["Pp_vbox", integer]
  | ["Pp_hvbox", integer]
  | ["Pp_hovbox", integer];

export type PpString =
  | ["Ppcmd_empty"]
  | ["Ppcmd_string", string]
  | ["Ppcmd_glue", PpString[]]
  | ["Ppcmd_box", BlockType, PpString]
  | ["Ppcmd_tag", PpTag, PpString]
  | ["Ppcmd_print_break", integer, integer]
  | ["Ppcmd_force_newline"]
  | ["Ppcmd_comment", string[]];

interface Error {
    code: integer; 
    message: string; 
}

export interface Goal {
    id: integer;
    goal: PpString;
    hypotheses: PpString[];
}

export interface ProofViewGoals {
    goals: Goal[];
    shelvedGoals: Goal[];
    givenUpGoals: Goal[];
}

export enum MessageSeverity {
    error = "Error",
    warning = "Warning", 
    info = "Information"
}

export type CoqMessage = [MessageSeverity, PpString];

export interface ProofViewNotification {
    proof: Nullable<ProofViewGoals>;
    messages: CoqMessage[];
}

export interface UpdateHightlightsNotification {
    uri: Uri; 
    parsedRange: Range[];
    processedRange: Range[];
}

export interface MoveCursorNotification {
    uri: Uri; 
    range: Range; 
}

export interface SearchCoqRequest {
    id: string;
    textDocument: VersionedTextDocumentIdentifier;
    pattern: string; 
    position: Position;
}

export interface SearchCoqHandshake {
    id: string;
}

export interface QueryError {
    code: integer; 
    message: string; 
}

export interface SearchCoqResult {
    id: string;
    name: PpString; 
    statement: PpString;
}

export interface AboutCoqRequest {
    textDocument: VersionedTextDocumentIdentifier;
    pattern: string; 
    position: Position;
    goalIndex?: number;
}

export type AboutCoqResponse = PpString;

export interface CheckCoqRequest {
    textDocument: VersionedTextDocumentIdentifier;
    pattern: string; 
    position: Position;
    goalIndex?: number;
};

export type CheckCoqResponse = PpString; 

export interface LocateCoqRequest {
    textDocument: VersionedTextDocumentIdentifier;
    pattern: string; 
    position: Position;
};

export type LocateCoqResponse = PpString; 

export interface PrintCoqRequest {
    textDocument: VersionedTextDocumentIdentifier;
    pattern: string; 
    position: Position;
};

export type PrintCoqResponse = PpString; 

export interface DocumentStateRequest {
    textDocument: TextDocumentIdentifier;
}

export interface DocumentStateResponse {
    document: string;
}

export interface ResetCoqRequest {
    textDocument: TextDocumentIdentifier;
}

export interface ResetCoqResponse {};
