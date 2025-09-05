## Sprint 2: 2D Room Editor MVP - Roadmap

### Task 1: Enhanced Room Schema Validation
- File: `src/schemas/room.ts`
- Extend `roomSchema`:
  - Width: min 1, max 30 (meters)
  - Depth: min 1, max 30 (meters)
  - Add specific error messages
  - Optional: add `name`, `description`

### Task 2: Room Input Form Component
- New: `src/components/room/RoomForm.tsx`
- Chakra UI form with:
  - Number inputs for width/depth
  - Real-time validation using Zod
  - Errors via `FormErrorMessage`
  - Submit button
  - Responsive layout

### Task 3: 2D Grid Canvas Component
- New: `src/components/room/RoomCanvas.tsx`
- Canvas should:
  - Render grid based on dimensions
  - Scale appropriately (e.g., 1 cell = 0.5–1m)
  - Show room boundaries clearly
  - Update when dimensions change
- Tech: CSS Grid or Canvas API

### Task 4: Enhanced Zustand Store
- File: `src/lib/store.ts`
- Add room dimensions + actions
- Persist to `localStorage` (e.g., `zustand/middleware/persist`)

### Task 5: Form–Canvas Integration
- File: `src/app/page.tsx`
- Integrate `RoomForm` and `RoomCanvas`
- Ensure real-time updates, handle errors

### Task 6: Responsive Design Polish
- Test across screen sizes
- Adjust scaling for mobile
- Ensure touch-friendly interactions
- Add sensible spacing/layout

### Success Criteria
- [ ] Inputs validate correctly (Zod)
- [ ] 2D grid renders dynamically
- [ ] State persists across reloads
- [ ] Works on desktop and mobile
- [ ] Real-time updates on change

### Suggested Structure
```
src/
├── components/
│   └── room/
│       ├── RoomForm.tsx
│       ├── RoomCanvas.tsx
│       └── index.ts
├── schemas/
│   └── room.ts
└── lib/
    └── store.ts
```

### When to Ask for Help
- Zod validation patterns
- Canvas rendering performance/issues
- Zustand persistence setup
- Responsive layout tradeoffs 