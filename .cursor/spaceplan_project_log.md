# 🛰️ SpacePlan — Project Log

> **Goal:** Build a modern, browser-based **2D/3D room planner** that lets users visualize, plan, and share layouts.

---

## **Project Overview**

**Tech Stack:**

- **Framework:** Next.js 15 (App Router, TypeScript)
- **UI:** Chakra UI + Framer Motion
- **State Management:** Zustand
- **Data Fetching & Caching:** TanStack Query
- **Validation:** Zod
- **3D Visualization:** Three.js + @react-three/fiber + drei
- **Drag & Drop:** React DnD
- **Code Quality:** [Biome](https://biomejs.dev/) (formatter + linter)
- **Deployment:** Vercel
- **Testing (later):** Vitest + React Testing Library + Cypress

---

## **Project Management**

Using **GitHub Projects** with Agile principles:

**Project Board Columns:**

- **Backlog** → Future features & ideas.
- **Sprint To Do** → Tasks for the active sprint.
- **In Progress** → Currently being developed.
- **Review** → Features ready for testing or refactoring.
- **Done** → Completed tasks.

**Labels:**

| Label          | Purpose                          |
|---------------|----------------------------------|
| `epic`        | Large feature areas              |
| `user-story`  | End-user functionality           |
| `task`        | Implementation steps             |
| `bug`         | Fixes and regressions            |
| `enhancement` | Improvements beyond MVP          |

---

## **Sprints Overview**

| Sprint | Goal                          | Status     |
|--------|-------------------------------|------------|
| 1      | Project Setup & Foundations   | ✅ Done |
| 2      | 2D Room Editor MVP            | 🟡 In Progress |
| 3      | Furniture Catalog             | ⏳ Not Started |
| 4      | 3D Visualization             | ⏳ Not Started |
| 5      | Save & Share API             | ⏳ Not Started |
| 6      | Polish & Launch              | ⏳ Not Started |

---

## **Sprint 1 — Project Setup & Foundations**

**Sprint Goal:** Set up a **production-ready** Next.js project configured with all core tools.  
**Duration:** ~1 week  
**Deliverable:** A deployed boilerplate app on Vercel.

---

### ✅ **Completed**

- **Repo Setup**
  - Created `spaceplan` repo on GitHub
  - Added README & Node `.gitignore`
- **Next.js Scaffold**
  - Used `create-next-app@latest` with TypeScript & App Router
  - Configured `@/*` import alias
- **Installed Core Dependencies**
  - Chakra UI, Zustand, TanStack Query, Zod, Three.js, React DnD
- **Configured Chakra UI**
  - Added custom theme in `src/theme`
  - Wrapped app in `<ChakraProvider />`
- **Set Up Zustand**
  - Created a simple `useUIStore` hook with toggle logic
- **Added Zod**
  - Defined schemas for rooms and furniture
- **Set Up Biome**
  - Configured Biome as the formatter & linter
- **Deploy to Vercel**
  - Boilerplate deployed to Vercel

---

## **Sprint 2 — 2D Room Editor MVP**

**Sprint Goal:** Let users define room dimensions on a 2D grid interactively.  
**Duration:** ~1.5 weeks  
**Deliverable:** A basic but functional **2D room editor** rendered on the homepage.

---

### **Epics & User Stories**

#### **Epic 1 — Room Dimension Input**  
> Users should be able to specify room dimensions manually.

- **User Story 1.1:**  
  *As a user, I want to enter room width and depth so I can customize my space.*  
  **Acceptance Criteria:**  
  - Width and depth inputs exist with validation via Zod.
  - Invalid inputs show inline Chakra UI errors.
  - Default values provided if fields are empty.

---

#### **Epic 2 — Interactive 2D Canvas**  
> A top-down 2D grid that visually represents the room.

- **User Story 2.1:**  
  *As a user, I want to see my room drawn on a grid based on the dimensions I entered.*  
  **Acceptance Criteria:**  
  - Canvas dynamically scales based on width/depth.
  - Grid cells represent consistent measurement units.
  - Room boundary updates instantly when inputs change.

- **User Story 2.2:**  
  *As a user, I want a clean, responsive interface so I can use this on desktop and mobile.*  
  **Acceptance Criteria:**  
  - Canvas is responsive.
  - Grid labels adjust based on viewport size.

---

#### **Epic 3 — State Management & Persistence**  

- **User Story 3.1:**  
  *As a user, I want my room dimensions saved locally so they persist on refresh.*  
  **Acceptance Criteria:**  
  - Zustand store holds room data.
  - Zustand persists state in `localStorage`.

---

### **Sprint 2 Task Breakdown**

| Task                                | Type         | Acceptance Criteria                              |
|------------------------------------|--------------|--------------------------------------------------|
| Set up Zod schemas for room inputs | `task`       | Width/depth validated (min 1m, max 30m) |
| Build Chakra UI form               | `task`       | Responsive, validated inputs for width/depth |
| Create 2D grid canvas component    | `task`       | Renders dynamically based on room size |
| Implement Zustand store            | `task`       | Stores room dimensions and persists them |
| Sync inputs ↔ canvas              | `task`       | Changing inputs updates the canvas instantly |
| Add responsive design tweaks       | `task`       | Canvas & controls work across devices |
| Write smoke tests (optional)      | `task`       | Form validation + rendering covered |

---

### **Deliverable for Sprint 2**

- User can set room dimensions.
- A 2D grid canvas renders dynamically.
- State persists across reloads.
- All inputs validated with Zod.

---

## **Backlog**

- Furniture catalog integration (Epic 3)
- Drag-and-drop furniture items
- Three.js 3D visualization
- Save & share layouts
- Authentication with NextAuth
- SEO, accessibility, and performance optimization
- Public beta launch strategy

---

## **Resources**

- **Chakra UI Docs:** [https://chakra-ui.com/](https://chakra-ui.com/)
- **TanStack Query Docs:** [https://tanstack.com/query/latest](https://tanstack.com/query/latest)
- **Zustand Docs:** [https://docs.pmnd.rs/zustand](https://docs.pmnd.rs/zustand)
- **Zod Docs:** [https://zod.dev/](https://zod.dev/)
- **Three.js + R3F:** [https://docs.pmnd.rs/react-three-fiber/getting-started/introduction](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Biome Docs:** [https://biomejs.dev/](https://biomejs.dev/)
- **Vercel Deployment:** [https://vercel.com/docs](https://vercel.com/docs)

---

## **Next Checkpoint**

- [ ] Build Zod schemas for room input
- [ ] Build Chakra form UI
- [ ] Create 2D grid canvas
- [ ] Integrate Zustand store
- [ ] Persist room state
