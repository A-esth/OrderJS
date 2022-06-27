.MODEL SMALL
.STACK 100h
.DATA       

VECTOR DB 0x08,0xF6,0x05,0xFF,0xE1,0x45,0x00,0x7A,0x17,0x3B
VAR DW 0xA
.CODE             
.STARTUP

MOV DI,0x170
MOV CX,VAR     
MOV SI,0

WritingLoop:
MOV AL,VECTOR[SI]
MOV [DI],AL
INC DI       
INC SI
LOOP WritingLoop

MOV DI,0x170
MOV CX,VAR

; Forward propagation

Forward:
MOV AL,[DI]
MOV BL,[DI+1]
CMP AL,BL
JBE Closure 

;Swapping Values
XCHG AL,BL
MOV [DI],AL
MOV [DI+1],BL 
    
; Backward propagation

MOV DX,DI
SUB DX,0x170
CMP DX,0
JZ Closure
 
Backwards:
MOV AH,[DI-1]
MOV BH,[DI]
CMP AH,BH  
JBE Continue 

;Swapping Values
XCHG AH,BH
MOV [DI-1],AH
MOV [DI],BH 
        	
Continue:
DEC DI
DEC DX
CMP DX,0 
JNZ Backwards
  	
Closure:
; Retrieving the value of DI before it entered Backward 
MOV DI,0xA
SUB DI,CX
ADD DI, 0x170
LOOP Forward    

END